export default function addInfo(state, cities) {
  return {type: "ADD_INFO", payload: {state: state, cities: cities}};
}
