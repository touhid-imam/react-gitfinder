import React, { createContext, useContext, useEffect, useState } from 'react';
import localUser from './localData/localMockUser';
import localRepos from './localData/localRepos';
import localFollowers from './localData/localFollowers';
import axios from 'axios';

const mainURL = 'https://api.github.com';

const GithubContext = createContext();

const GithubProvider = ({children}) => {
    const [gitUser, setGitUser] = useState(localUser);
    const [repos, setRepos] = useState(localRepos);
    const [followers, setFollowers] = useState(localFollowers);
    // Request & Loading
    const [request, setRequest] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    // Error
    const [error, setError] = useState({show: false, msg: ''});

    // Search Github User
    const searchGitUser = async (user) => {
        toggleError();
        setIsLoading(true);
        const response = await axios(`${mainURL}/users/${user}`).catch(err => console.log(err));
        if(response){
            setGitUser(response.data);
            const {login, followers_url, repos_url} = response.data;
            // repos
            const userRepos = axios(`${repos_url}?per_page=100`);
            // Followers
            const userFollowers = axios(`${followers_url}?per_page=100`);
            await Promise.allSettled([userRepos, userFollowers]).then(results => {
                const [repos, followers] = results;
                const status = "fulfilled";
                if(repos.status === status){
                    setRepos(repos.value.data);
                }
                if(followers.status === status){
                    setFollowers(followers.value.data);
                }
            }).catch(err => console.log(err));
        } else{
            toggleError(true, 'There is no user in this username!!');
        }
        checkRequest();
        setIsLoading(false);
    } 

    // Request Limit
    const checkRequest = () => {
        toggleError();
        axios(`${mainURL}/rate_limit`).then(({data}) => {
            const {rate: {remaining}} = data;
            setRequest(remaining);
            if(remaining === 0){
                toggleError(true, 'Sorry!! the you have exceeded the hourly API Request Limit!');
            }
        }).catch(err => console.log(err));
    }
    // toggleError
    const toggleError = (show=false, msg="") => {
        setError({show, msg});
    }
    useEffect(checkRequest, []);
    return <GithubContext.Provider value={{ gitUser, repos, followers, request, error, searchGitUser, isLoading }}>{children}</GithubContext.Provider>
}

export const useGitfinderContext = () => {
    return useContext(GithubContext);
}

export {GithubContext, GithubProvider}