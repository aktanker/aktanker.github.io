// JavaScript Document




document.getElementById("text_1").textContent = "Commonly prescribed opioids"; 

function changeText() {
	document.getElementById("text_1").textContent = "Commonly prescribed opioids: methadone, oxycodone, hydrocodone, etc.";
	
}

document.getElementById("text_1").addEventListener("click", changeText);






document.getElementById("text_2").textContent = "Heroin"; 

function changeText_2() {
	document.getElementById("text_2").textContent = "Heroin: it is an illicit opioid synthesized from morphine";
	
}

document.getElementById("text_2").addEventListener("click", changeText_2);






document.getElementById("text_3").textContent = "Synthetic opioids"; 

function changeText_3() {
	document.getElementById("text_3").textContent = "Synthetic opioids: tramadol, fentanyl, etc.";
	
}

document.getElementById("text_3").addEventListener("click", changeText_3);








function changeImage_1() {
    if (document.getElementById('all_wave').src.match("one")) {
        document.getElementById('all_wave').src = "all_waves_col.svg";
    } else {
        document.getElementById('all_wave').src = "col_chart_wave_one.svg";
    }
}

function changeImage_2() {
    if (document.getElementById('all_wave').src.match("two")) {
        document.getElementById('all_wave').src = "all_waves_col.svg";
    } else {
        document.getElementById('all_wave').src = "col_chart_wave_two.svg";
    }
}


function changeImage_3() {
    if (document.getElementById('all_wave').src.match("three")) {
        document.getElementById('all_wave').src = "all_waves_col.svg";
    } else {
        document.getElementById('all_wave').src = "col_chart_wave_three.svg";
    }
}






