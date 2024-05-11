//Question 06:
// Stripping Name: Store a person's name & include some white space characters at the beginning & end of the name. Make sure you use each character combination, "\t" & "\n" ,at least onece.Print the name once,so the white space around the name is displayed. Then print the name after stripping the white spaces.

//Answer:

let personName:string = "\t\n John doe \n\t";
console.log("original :", personName);
console.log("stripping:", personName.trim());