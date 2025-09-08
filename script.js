

        const callData = []

        // reuseable function - to change the counting of hearts 

        function changeOfHearts(heartId) {
            document.getElementById(heartId).addEventListener("click", function () {
                const currentHearts = parseInt(document.getElementById('heartCount').innerText)
                // console.log(currentHearts)
                updateHearts = currentHearts + 1
                document.getElementById('heartCount').innerText = updateHearts
            })
        }


        //  function coinChanger(callerId) {
        //     document.getElementById(callerId).addEventListener("click", function () {
        //         const availableCoins = parseInt(document.getElementById('availableCoin').innerText)

        //         updateCoin = availableCoins - 20
        //         document.getElementById('availableCoin').innerText = updateCoin
        //     })
        // }



        // reuseable function for coins  & push TO call history

        function coinChanger(callerId, numberId, headingId) {
            document.getElementById(callerId).addEventListener("click", function () {
                const availableCoins = parseInt(document.getElementById('availableCoin').innerText);
                const number = document.getElementById(numberId).innerText;
                const heading = document.getElementById(headingId).innerText;

                if (availableCoins >= 20) {
                    const updateCoin = availableCoins - 20;
                    document.getElementById('availableCoin').innerText = updateCoin;
                    alert("Calling...... " + number);


                    // push call history
                const callDataHis = {
                    name: heading,
                    number: number,
                    time: new Date().toLocaleTimeString()
                };

                callData.push(callDataHis);
                console.log(callData);


                const callhistryContainer = document.getElementById("call-history")

                const div = document.createElement("div")
                div.innerHTML = `
                    <div class="flex justify-between items-center rounded-lg bg-[#fafafa] p-[16px]">
                        <div class="flex flex-col gap-2">
                            <h2 class="text-[18px] font-bold">${callDataHis.name}</h2>
                            <p>${callDataHis.number}</p>
                        </div>
                        <div>
                            <p>${callDataHis.time}</p>
                        </div>
                    </div>
                    `;
                callhistryContainer.appendChild(div);



                } else {
                    alert("Insufficient coins! Please reload");
                }

                
            });
        }




        // reuseable function to copy paste 
        function setupCopy(copyBtnId, numberId) {
            document.getElementById(copyBtnId).addEventListener("click", function () {
                const number = document.getElementById(numberId).innerText;
                const currentCopy = parseInt(document.getElementById('copyCount').innerText)
                navigator.clipboard.writeText(number).then(() => {
                    alert("Copied: " + number);

                
                // console.log(currentHearts)
                updateCopy = currentCopy + 1
                document.getElementById('copyCount').innerText = updateCopy
                });
            });
        }


        


        // coin calculator and alert sender 
        coinChanger("emergencyCall", "emergencyNum", "headingEmergency")
        coinChanger("poisonCall", "poisonNum", "headingPolice")
        coinChanger("fireCall", "fireNum", "headingFire")
        coinChanger("pewpewCall", "pewpewNum", "headingAmbulance")
        coinChanger("womenCall", "womenNum", "headingWomen")
        coinChanger("noAnswerCall", "dontCallNum", "headingAnti")
        coinChanger("elecCall", "elecNum", "headingElec")
        coinChanger("bracCall", "brackNum", "headingBrac")
        coinChanger("railwayCall", "railwayNum", "headingRailway")

        //  calculation of hearts 
        changeOfHearts("heartRail")
        changeOfHearts('heartBrack')
        changeOfHearts('heartElec')
        changeOfHearts('impossibleHeart')
        changeOfHearts('womensHeart')
        changeOfHearts('pewpewpew')
        changeOfHearts('fireHeart')
        changeOfHearts('poisonHeart')
        changeOfHearts('emergencyHeart')


        // copy paste button
        setupCopy("emergencyCopy", "emergencyNum")
        setupCopy("poisonCopy", "poisonNum")
        setupCopy("fireCopy", "fireNum")

        setupCopy("pewpewCopy", "pewpewNum")
        setupCopy("womenCopy", "womenNum")
        setupCopy("dontCopy", "dontCallNum")

        setupCopy("elecCopy", "elecNum")
        setupCopy("bracCopy", "brackNum")
        setupCopy("railwayCopy", "railwayNum")

// clear data history 


        document.getElementById("clearButton").addEventListener("click", function () {
            
            callData.length = 0;

            
            const callhistryContainer = document.getElementById("call-history");
            callhistryContainer.innerHTML = "";
        });
