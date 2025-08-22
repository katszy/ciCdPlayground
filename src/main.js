import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Kata Szondy",
    // In the following fields you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["Automated testing and deployment"],
    // Which CI/CD tools do you use in your project?
    tools: "Jenkins",
    // What do you want to learn in this workshop?
    expectations: ["Get a better understanding of Jenkins", "Learn how to setup a CI/CD pipeline"],
  },
});
