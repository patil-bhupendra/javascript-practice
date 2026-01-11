function getGrade(score) {
    if (score < 0 || score > 100) return "Invalid marks";
  
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "E";
    else if (score >= 33) return "D";
    else return "Fail";
  }
  
  console.log(getGrade(65));