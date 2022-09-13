student=[];

function submit(){
    var display_array=[];
    for(var j=1; j<=4; j++){
        var name=document.getElementById("n"+j).value;
        student.push(name);
    }
    console.log(student);
    var length=student.length;
    for(var k=0; k<length; k++){
        display_array.push("<h4>NAME - "+student[k]+"</h4>");

    }
    console.log(display_array);
    document.getElementById("display_name_with_commas").innerHTML=display_array;
    var remove_commas=display_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

}
function sorting(){
    student.sort();
    var display_array_sort=[];
    var length=student.length;
    
   
    for(var k=0; k<length; k++){
        display_array_sort.push("<h4>NAME - "+student[k]+"</h4>");

    }
    console.log(display_array_sort);
    var remove_commas=display_array_sort.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}