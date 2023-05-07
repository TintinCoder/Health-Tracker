const input = document.getElementById("weightInput")
const poundsEl = document.getElementById("po")
const gramsEl = document.getElementById("gr")
const ouncesEl = document.getElementById("oun")

const heightInput = document.getElementById("heightInput")
const inchesEl = document.getElementById("inch")
const metersEl = document.getElementById("meter")
const cmsEl = document.getElementById("cm")

const heightBmi = document.getElementById("height")
const weightBmi = document.getElementById("weight")
const bmiEl = document.getElementById("bmi")
const bmiAnalyticsEl = document.getElementById("bmi_analytics")
const button = document.getElementById('btn')

input.addEventListener('input', (e)=>{
    let kgs = e.target.value;
    const pounds = (parseFloat(kgs) * 2.204623).toFixed(2);
    const grams = (parseFloat(kgs) * 1000).toFixed(2);
    const ounces = (parseFloat(kgs) * 35.27396).toFixed(2);

    if(e.target.value === ''){
        poundsEl.classList.add('hidden')
        poundsEl.classList.remove('visible')

        gramsEl.classList.add('hidden')
        gramsEl.classList.remove('visible')

        ouncesEl.classList.add('hidden')
        ouncesEl.classList.remove('visible')
    } else {
        poundsEl.classList.remove('hidden')
        poundsEl.classList.add('visible')
        document.getElementById('pounds').innerHTML = pounds;
    
        gramsEl.classList.remove('hidden')
        gramsEl.classList.add('visible')
        document.getElementById('grams').innerHTML = grams;
    
        ouncesEl.classList.remove('hidden')
        ouncesEl.classList.add('visible')
        document.getElementById('ounces').innerHTML = ounces;
    }
})

heightInput.addEventListener('input', (e)=>{
    let height = parseFloat(e.target.value)
    let inches = (height * 12).toFixed(2)
    let meters = (height * 0.3048).toFixed(2)
    let cms = (height * 30.48).toFixed(2)

    if(e.target.value === ''){
        inchesEl.classList.add('hidden')
        inchesEl.classList.remove('visible')

        metersEl.classList.add('hidden')
        metersEl.classList.remove('visible')

        cmsEl.classList.add('hidden')
        cmsEl.classList.remove('visible')
    } else {
        inchesEl.classList.add('visible')
        inchesEl.classList.remove('hidden')
        document.getElementById('inches').innerHTML = inches;
        metersEl.classList.add('visible')
        metersEl.classList.remove('hidden')
        document.getElementById('meters').innerHTML = meters;
        cmsEl.classList.add('visible')
        cmsEl.classList.remove('hidden')
        document.getElementById('cms').innerHTML = cms;
    }
})

button.addEventListener('click', ()=>{
    let height = heightBmi.value;
    let weight = weightBmi.value;
    let bmi;
    bmi = weight/(height*height)
    if(bmi < 18.5){
        bmiEl.classList.remove('hidden')
        bmiEl.classList.add('visible')
        bmiAnalyticsEl.classList.remove('hidden')
        bmiAnalyticsEl.classList.add('visible')
        bmiEl.innerHTML = bmi;
        bmiEl.style.color = 'red';
        bmiAnalyticsEl.innerHTML = 'You fall under the category of under weight'
    } else if(bmi > 18.5 && bmi < 24.9){
        bmiEl.classList.remove('hidden')
        bmiEl.classList.add('visible')
        bmiAnalyticsEl.classList.remove('hidden')
        bmiAnalyticsEl.classList.add('visible')
        bmiEl.innerHTML = bmi;
        bmiEl.style.color = 'green';
        bmiAnalyticsEl.innerHTML = 'You fall under the category of normal/healthy weight'
    } else if(bmi > 25 && bmi < 29.9){
        bmiEl.classList.remove('hidden')
        bmiEl.classList.add('visible')
        bmiAnalyticsEl.classList.remove('hidden')
        bmiAnalyticsEl.classList.add('visible')
        bmiEl.innerHTML = bmi;
        bmiEl.style.color = 'orange';
        bmiAnalyticsEl.innerHTML = 'You fall under the category of over weight'
    } else {
        bmiEl.classList.remove('hidden')
        bmiEl.classList.add('visible')
        bmiAnalyticsEl.classList.remove('hidden')
        bmiAnalyticsEl.classList.add('visible')
        bmiEl.innerHTML = bmi;
        bmiEl.style.color = 'red';
        bmiAnalyticsEl.innerHTML = 'You fall under the category of obeese'
    }
})