const apiMockRunning = true;


/**
* 
* This class is API Mock for developping app
*
* @param id This represent the id of user
* @return data from API, in JSON format. Otherwise, it throw error
*
*/

class ApiMock{

    getUserDetails(id){
        return new Promise((resolve, reject) => {
            if(apiMockRunning) resolve({
                id: 99,
                userInfos:{
                    firstName: 'Mike',
                    lastName: 'Tyson',
                    age : 55,
                },
                todayScore: 0.78,
                keyData: {
                    calorieCount: 2600,
                    proteinCount: 195,
                    carbohydrateCount: 3000,
                    lipidCount: 80
                }
            })
            else{
                reject('api mock is not running')
            }
        })
       
    }

    getUserActivity(id){
        return new Promise((resolve, reject) => {
            if(apiMockRunning) resolve({
            userId: 99,
            sessions: [
                {
                    day: '2021-07-01',
                    kilogram: 80,
                    calories: 250
                },
                {
                    day: '2021-07-02',
                    kilogram: 91,
                    calories: 240
                },
                {
                    day: '2021-07-03',
                    kilogram: 89,
                    calories: 260
                },
                {
                    day: '2021-07-04',
                    kilogram: 87,
                    calories: 275
                },
                {
                    day: '2021-07-05',
                    kilogram: 88,
                    calories: 255
                },
                {
                    day: '2021-07-06',
                    kilogram: 90,
                    calories: 230
                },
                {
                    day: '2021-07-07',
                    kilogram: 89,
                    calories: 250
                }
            ]
        })
        else{
            reject('api mock is not running')
        }
        })
        
    }


    getUserAverageSession(id){
        return new Promise((resolve, reject) => {
            if(apiMockRunning) resolve({
                userId: 99,
                sessions: [
                    {
                        day: 1,
                        sessionLength: 32
                    },
                    {
                        day: 2,
                        sessionLength: 27
                    },
                    {
                        day: 3,
                        sessionLength: 38
                    },
                    {
                        day: 4,
                        sessionLength: 42
                    },
                    {
                        day: 5,
                        sessionLength: 35
                    },
                    {
                        day: 6,
                        sessionLength: 28
                    },
                    {
                        day: 7,
                        sessionLength: 40
                    }
                ]
            })
            else{
                reject('api mock is not running')
            }
        })
    }


    getUserPerformance(id){
        return new Promise((resolve, reject) => {
            if(apiMockRunning) resolve({
                userId: 99,
                kind: {
                    1: 'cardio',
                    2: 'energy',
                    3: 'endurance',
                    4: 'strength',
                    5: 'speed',
                    6: 'intensity'
                },
                data: [
                    {
                        value: 140,
                        kind: 1
                    },
                    {
                        value: 125,
                        kind: 2
                    },
                    {
                        value: 130,
                        kind: 3
                    },
                    {
                        value: 100,
                        kind: 4
                    },
                    {
                        value: 210,
                        kind: 5
                    },
                    {
                        value: 190,
                        kind: 6
                    }
                ]
            })
            else{
                reject('api mock is not running')
            }
        })
    }
}


/**
* 
* Class API is used to connect this app to the backend. 
*
* @param id This represent the id of user
* @return data from API, in JSON format. Otherwise, it throw error 
*
*/

class Api {
    
    getUserDetails(id){
        return fetch(process.env.REACT_APP_API_URL + '/user/' + id).then((res) => res.json())
        .then((res)=>res.data)
    }

    getUserActivity(id){
        return fetch(process.env.REACT_APP_API_URL + '/user/' + id + '/activity').then((res) => res.json())
        .then((res)=>res.data)
    }

    
    getUserAverageSession(id){
        return fetch(process.env.REACT_APP_API_URL + '/user/' + id + '/average-sessions').then((res) => res.json())
        .then((res)=>res.data)
    }

    
    getUserPerformance(id){
        return fetch(process.env.REACT_APP_API_URL + '/user/' + id + '/performance').then((res) => res.json())
        .then((res)=>res.data)
    }

}


/**
* 
* Used to switch from reel API to Mocked API
* We modifiying .ENV file for switching
*
* @param id This represent the id of user
* @return data from API, in JSON format. Otherwise, it throw error
*
*/

let api = new Api()
if(process.env.REACT_APP_API === 'mock'){
    api = new ApiMock()
}
export default api;