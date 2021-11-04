const states = (
  state = {
    selectedStates: [],
    selectedCities: [],
    statesInfo: {},
  },
  action
) => {
  switch (action.type) {
    case "ADD_STATE":
      const newState = {
        selectedStates: state.selectedStates,
        selectedCities: state.selectedCities,
        statesInfo: state.statesInfo,
      };
      if (newState.selectedStates.includes(action.payload)) {
        return newState;
      }
      newState.selectedStates.push(action.payload);
      newState.statesInfo[action.payload].forEach((e) => {
        if (!newState.selectedCities.includes(e)) {
          newState.selectedCities.push(e);
        }
      });
      return newState;

    case "REMOVE_STATE":
      const removeState = {
        selectedStates: state.selectedStates,
        selectedCities: state.selectedCities,
        statesInfo: state.statesInfo,
      };

      if (!removeState.selectedStates.includes(action.payload)) {
        return removeState;
      }

      removeState.selectedStates = removeState.selectedStates.filter(
        (e) => e !== action.payload
      );
      removeState.selectedCities = removeState.selectedCities.filter(
        (e) => !removeState.statesInfo[action.payload].includes(e)
      );
      return removeState;

    case "REMOVE_CITY":
      const removeCity = {
        selectedStates: state.selectedStates,
        selectedCities: state.selectedCities,
        statesInfo: state.statesInfo,
      };

      if (!removeCity.selectedCities.includes(action.payload)) {
        return removeCity;
      }

      removeCity.selectedCities = removeCity.selectedCities.filter(
        (e) => e !== action.payload
      );

      let parentState;
      Object.keys(removeCity.statesInfo).forEach((e) => {
        if (removeCity.statesInfo[e].includes(action.payload)) {
          parentState = e;
        }
      });

      let cnt = 0;
      removeCity.selectedCities.forEach((e) => {
        if (removeCity.statesInfo[parentState].includes(e)) {
          cnt++;
        }
      });

      if (cnt === 0) {
        removeCity.selectedStates = removeCity.selectedStates.filter(
          (e) => e !== parentState
        );
      }
      return removeCity;

    case "ADD_CITY":
      const newCity = {
        selectedStates: state.selectedStates,
        selectedCities: state.selectedCities,
        statesInfo: state.statesInfo,
      };
      if (newCity.selectedCities.includes(action.payload)) {
        return newCity;
      }
      newCity.selectedCities.push(action.payload);
      let parent;
      Object.keys(newCity.statesInfo).forEach((e) => {
        if (newCity.statesInfo[e].includes(action.payload)) {
          parent = e;
        }
      });
      if(newCity.selectedStates.includes(parent)){
        return newCity;
      }
      Object.keys(newCity.statesInfo).forEach((e) => {
        if (newCity.statesInfo[e].includes(action.payload)) {
          newCity.selectedStates.push(e);
        }
      });
      return newCity;

    case "ADD_INFO":
      const newInfo = {
        selectedStates: state.selectedStates,
        selectedCities: state.selectedCities,
        statesInfo: state.statesInfo,
      };
      if (Object.keys(newInfo.statesInfo).includes(action.payload.state)) {
        return newInfo;
      }
      newInfo.statesInfo[action.payload.state] = action.payload.cities;
      return newInfo;
    default:
      return state;
  }
};

export default states;
