/* Metric Converter web app. This app will have forms that will take a
number input and convert it to the different metric units. It will use length, weight,
speed, time, and temperature measurements. They will not all be displayed at once but will have
UI options to access each individual one. The starting one will be the length form. */

// Variables holding the input element
let lengthInput = document.getElementById("lengthInput");


// Variable holding the output div for displaying results
let output = document.getElementById("output");


// Function to get form input and display it
function getConversions() {
    // Variables holding the input value
    let length = lengthInput.value;
    let mm = length * 25.4;
    let cm = length * 2.54;
    let ft = length/12;
    let yd = (length/12)/3;
    let m = length * 0.0254;
    let km = length * 0.0000254;
    let mi = (length/12)/5280;
    let nmi = length * 0.000013714902807775;
    output.innerHTML = `
            <div class="row">
                <div class="col-md-3">
                    <div class="card text-white bg-primary mb-3">
                        <div class="card-header"><h6>Millimeters</h6></div>
                        <div class="card-body">
                            <p class="card-text">${mm}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card text-white bg-success mb-3">
                        <div class="card-header"><h6>Centimeters</h6></div>
                        <div class="card-body">
                            <p class="card-text">${cm}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card text-white bg-danger mb-3">
                        <div class="card-header"><h6>Meters</h6></div>
                        <div class="card-body">
                            <p class="card-text">${m}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card text-white bg-warning mb-3">
                        <div class="card-header"><h6>Kilometers</h6></div>
                        <div class="card-body">
                            <p class="card-text">${km}</p>
                        </div>
                    </div>
                </div>
            </div>
            <br><br>
            <div class="row">
                <div class="col-md-3">
                    <div class="card text-white bg-primary mb-3">
                        <div class="card-header"><h6>Feet</h6></div>
                        <div class="card-body">
                            <p class="card-text">${ft}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card text-white bg-success mb-3">
                        <div class="card-header"><h6>Yard</h6></div>
                        <div class="card-body">
                            <p class="card-text">${yd}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card text-white bg-danger mb-3">
                        <div class="card-header"><h6>Miles</h6></div>
                        <div class="card-body">
                            <p class="card-text">${mi}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card text-white bg-warning mb-3">
                        <div class="card-header"><h6>Nautical Miles</h6></div>
                        <div class="card-body">
                            <p class="card-text">${nmi}</p>
                        </div>
                    </div>
                </div>
            </div>
            `;
}

// Event listener to display conversions as they are typed/inputted
lengthInput.addEventListener('input', getConversions);

