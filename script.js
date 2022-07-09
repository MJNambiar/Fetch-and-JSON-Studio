window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(marinasData => {
        // console.log("MarinasData" + JSON.stringify(marinasData));
        marinasData.json().then(function (json) {
            const container = document.getElementById("container");
            container.innerHTML = "";
            let value;
            // console.log("container" + container.innerHTML);
            for (let i = 0; i < json.length; i++) {
                value = json[i];
            container.innerHTML += `<div class="astronaut">
                <div class="bio">
                    <h3> ${value.firstName} ${value.lastName}</h3>
                    <ul>
                        <li>Hours in space: ${value.hoursInSpace}</li>
                        <li>Active: ${value.active}</li>
                        <li>Skills: ${value.skills}</li>
                    </ul>
                </div>
                    <img class="avatar" src=${value.picture} height=250></img>
            </div>    
                `;

            }


            // for (value of json) {
            //     // console.log(value);
            //     container.innerHTML += `
            // <div class="astronaut">
            //     <div class="bio">
            //         <h3> ${value.firstName} ${value.lastName}</h3>
            //         <ul>
            //             <li>Hours in space: ${value.hoursInSpace}</li>
            //             <li>Active: ${value.active}</li>
            //             <li>Skills: ${value.skills}</li>
            //         </ul>
            //     </div>
            //         <img class="avatar" src=${value.picture} height=250></img>
            // </div>    
            //     `;
            //     // console.log(container.innerHTML);
            // }
        });
    });
});

    //initiate an empty string, add to it, change order