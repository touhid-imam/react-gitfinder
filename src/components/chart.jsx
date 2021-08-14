import React from "react";
import { useGitfinderContext } from "../context/store";
import SingleChart from "./singleChart";

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
const Chart = () => {
  const { repos } = useGitfinderContext();
  let languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }
    return total;
  }, {});

  // Most Used Language
  const mostUsedLanguage = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);
  const languageChart = {
    chartType: "pie3d",
    chartCaption: "Languages",
    chartShowPercentValues: 1,
    chartDecimals: 0,
    chartEnableSmartLabels: 0,
    chartPieRadius: "65%",
    chartStartingAngle: 0,
  };

  // stars and forks
  let { stars, forks } = repos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item;
      total.stars[stargazers_count] = { label: name, value: stargazers_count };
      total.forks[forks] = { label: name, value: forks };
      return total;
    },
    {
      stars: {},
      forks: {},
    }
  );
  stars = Object.values(stars).slice(-5).reverse();
  forks = Object.values(forks).slice(-5).reverse();
  const starChart = {
    chartType: "column3d",
    chartCaption: "Most Popular",
    chartXaxisName: "Repos",
    chartYaxisName: "Stars",
    chartShowPercentValues: 1,
    chartDecimals: 0,
    chartEnableSmartLabels: 1,
    chartPieRadius: "50%",
    chartStartingAngle: 0,
  };
  const forksChart = {
    chartType: "bar3d",
    chartCaption: "Most Forked",
    chartXaxisName: "Repos",
    chartYaxisName: "Forks",
    chartShowPercentValues: 1,
    chartDecimals: 0,
    chartEnableSmartLabels: 1,
    chartPieRadius: "50%",
    chartStartingAngle: 0,
  };

  // Stars Per lanugage - Most Popular
  const mostPopular = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .map((item) => {
      return { ...item, value: item.stars };
    })
    .slice(0, 5);
  const mosPopularLanguage = {
    chartType: "doughnut2d",
    chartCaption: "Stars Per Language",
    chartShowPercentValues: 1,
    chartDecimals: 0,
    chartEnableSmartLabels: 1,
    chartPieRadius: "50%",
    chartStartingAngle: 0,
  };
  return (
    <>
      <SingleChart chartOption={languageChart} data={mostUsedLanguage} />
      <SingleChart chartOption={starChart} data={stars} />
      <SingleChart chartOption={mosPopularLanguage} data={mostPopular} />
      <SingleChart chartOption={forksChart} data={forks} />
    </>
  );
};

export default Chart;
