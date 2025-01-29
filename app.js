// window.addEventListener("load", () => {
//     const app = document.querySelector('#app')

//     if ("geolocation" in navigator) {
//         app.querySelector('#status').innerHTML = 'местоположение доступно'
//     } else {
//         app.querySelector('#status').innerHTML = 'местоположение НЕ доступно'
//     }

// navigator.geolocation.getCurrentPosition(function (position) {
//     console.log(111, position);
//     app.querySelector('#current').innerHTML = JSON.stringify(position);
// });


//     function success(pos) {
//         console.log(pos);
//     }

//     function error(err) {
//         console.error(`ERROR(${err.code}): ${err.message}`, err);
//     }

//     id = navigator.geolocation.watchPosition(success, error);
// })

const app = {
    data() {
        return {
            status: '-',
            current: {
                coords: {
                    accuracy: undefined,
                    altitude: undefined,
                    altitudeAccuracy: undefined,
                    heading: undefined,
                    latitude: undefined,
                    longitude: undefined,
                    speed: undefined,
                },
                timestamp: 0
            },
            positions: []
        }
    },
    beforeMount() {
        if ("geolocation" in navigator) {
            this.status = 'местоположение доступно'
        } else {
            this.status = 'местоположение НЕ доступно'
        }

        navigator.geolocation.getCurrentPosition((position) => {
            this.current.timestamp = position.timestamp
            this.current.coords.accuracy = position.coords.accuracy
            this.current.coords.altitude = position.coords.altitude
            this.current.coords.altitudeAccuracy = position.coords.altitudeAccuracy
            this.current.coords.heading = position.coords.heading
            this.current.coords.latitude = position.coords.latitude
            this.current.coords.longitude = position.coords.longitude
            this.current.coords.speed = position.coords.speed
        });

        navigator.geolocation.watchPosition((position) => {
            this.positions.push(position)
        })
    }
}

Vue.createApp(app).mount('#app')