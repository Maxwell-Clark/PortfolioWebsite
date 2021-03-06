import Vue from "vue";

export const store = Vue.observable({
  isNavOpen: false
});

export const mutations = {
  setIsNavOpen(yesno) {
    store.isNavOpen = yesno;
  },
  toggleNav() {
    store.isNavOpen = !store.isNavOpen;
  }
};

export const state = {
  returnSkillInfo(skill) {
    switch (skill) {
      case 'JavaScript':
        currentSkillInfo = JavaScriptInfo
        break;
      case 'HTML5':
        currentSkillInfo = HTML5Info
        break;
      case 'CSS':
        currentSkillInfo = CSSInfo
        break;
      case 'Vue':
        currentSkillInfo = VueInfo
        break;
      case 'Unit Testing':
        currentSkillInfo = UnitTestingInfo
        break;
      case 'Git':
        currentSkillInfo = GitInfo
        break;
      case 'REST APIs':
        currentSkillInfo = RESTAPISInfo
        break;
      case 'Python':
        currentSkillInfo = PythonInfo
        break;
      case 'Java':
        currentSkillInfo = JavaInfo
        break;
      case 'GoLang':
        currentSkillInfo = GoLangInfo
        break;
      case 'TensorFlow':
        currentSkillInfo = TensorFlowInfo
        break;
      case 'Http':
        currentSkillInfo = HttpInfo
        break;
      case 'Turf.js':
        currentSkillInfo = TurfInfo
        break;
      case 'Express.js':
        currentSkillInfo = ExpressInfo
        break;
      case 'MongoDb':
        currentSkillInfo = MongoDbInfo
        break;
      case 'SQL':
        currentSkillInfo = SQLInfo
        break;
      case 'TypeScript':
        currentSkillInfo = TypeScriptInfo
        break;
      case 'AdditionalSkills':
        currentSkillInfo = AdditionalSkillsInfo
        break;
      case 'Azure Services':
        currentSkillInfo = AzureServicesInfo
        break;
      case 'Azure Devops':
        currentSkillInfo = AzureDevopsInfo
        break;
    }
  }
}
