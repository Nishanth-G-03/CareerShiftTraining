document.getElementById("button").addEventListener("click",calculatingVelocity);

function calculatingVelocity(){

    const q = parseFloat(document.getElementById("flowFullScaleValue").value);
    const d = parseFloat(document.getElementById("outerDiameter").value);
    const t = parseFloat(document.getElementById("pipeThickness").value);
    const vtml = parseFloat(document.getElementById("velToMaintain").value);

    const id = d-t-t;
    const area = ((3.14/4)*id*id)/1000000;
    const v = (q/(3600*1000))/area;
    const ftm = vtml*area;
    
    const areaOfPipe = document.getElementById("areaOfPipe");
    const velocity = document.getElementById("velocity");
    const innerDia = document.getElementById("innerDia");
    const flowToMaintain = document.getElementById("flowToMaintain");

    areaOfPipe.textContent = area.toPrecision(4);
    velocity.textContent = v.toPrecision(3);
    innerDia.textContent = (id/1000).toPrecision(5);
    flowToMaintain.textContent = Math.ceil(ftm*(3600*1000),0);

}