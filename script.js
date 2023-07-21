// const csvtojson = require('csvtojson')
// const fs = require('fs')
// const csvfilepath = "winequality.csv"

// csvtojson()
// .fromFile(csvfilepath)
// .then((json)=>{
//   console.log(json)
//   fs.writeFileSync("output.json",JSON.stringify(json),"utf-8",(err)=>{
//     if(err)console.log(err)
//   })
// })
function returnText(){
//Function to calculate the Euclidean distance between two points

//result
  var x = document.getElementById("myDIV");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
function euclideanDistance(pointA, pointB) {
  let sum = 0;

  for (let key in pointA) {
    if (key !== 'quality') {
      sum += Math.pow(pointA[key] - pointB[key], 2);
    }
  }

  return Math.sqrt(sum);
}

// kNN function to classify new instances
function kNN(dataset, query, k) {
  // Calculate the distance between the query point and all points in the dataset
  const distances = dataset.map((data) => {
    const distance = euclideanDistance(query, data);
    return { distance, quality: data.quality };
  });

  // Sort the distances in ascending order
  distances.sort((a, b) => a.distance - b.distance);

  // Get the k nearest neighbors
  const neighbors = distances.slice(0, k);

  // Count the occurrences of each quality level in the neighbors
  const qualityCounts = {};
  neighbors.forEach((neighbor) => {
    if (qualityCounts[neighbor.quality]) {
      qualityCounts[neighbor.quality]++;
    } else {
      qualityCounts[neighbor.quality] = 1;
    }
  });

  // Find the quality level with the maximum count
  let maxCount = 0;
  let predictedQuality = null;
  for (const quality in qualityCounts) {
    if (qualityCounts[quality] > maxCount) {
      maxCount = qualityCounts[quality];
      predictedQuality = quality;
    }
  }

  return predictedQuality;
}

      let fixedacidity=document.getElementById("f-a").value;
      let volatileacidity=document.getElementById("v-a").value;
      let ca=document.getElementById("c-a").value;
      let rs=document.getElementById("r-s").value;
      let ch=document.getElementById("ch").value;
      let fsd=document.getElementById("f-s-d").value;
      let tsd=document.getElementById("t-s-d").value;
      let density=document.getElementById("d").value;
      let pH=document.getElementById("ph").value;
      let sulphates=document.getElementById("sul").value;
      let alcohol=document.getElementById("al").value;

      console.log("fixed acidity : " +fixedacidity,
      "volatile acidity : "+volatileacidity,
      "citric acid : "+ ca,
      "residual sugar : "+rs,
      "chlorides : "+ch,
      "free sulfur dioxide : "+fsd,
      "total sulfur dioxide : "+tsd,
      "density : "+density,
      "pH  : "+pH,
      "sulphates : "+ sulphates,
      "alcohol : "+alcohol);
  

      // Load the wine data from the JSON file
fetch('wineData.json')
  .then((response) => response.json())
  .then((data) => {
    const dataset = data;

    
    // Example usage
    const queryPoint = {
      
      "fixed-acidity": fixedacidity,
  "volatile acidity": volatileacidity,
  "citric-acid": ca,
  "residual-sugar": rs,
  "chlorides": ch,
  "free sulfur dioxide":fsd,
  "total sulfur dioxide": tsd,
  "density": density,
  "pH": pH,
  "sulphates": sulphates,
  "alcohol": alcohol
    };
    const k = 1;
    let predictedQuality = kNN(dataset, queryPoint, k);
    console.log('Predicted quality:', predictedQuality);
    document.getElementById("ans").innerHTML ="Your Wine Quality is "+ predictedQuality+" . ";
  })
  .catch((error) => {
    console.error('Error loading JSON file:', error);
  });
 
   
    }
                            
   








