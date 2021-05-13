//IIFE - Immediately Invoked Function Expression = anonymous self-executing function - closure
(function(){
    function Start()
    {
        console.log("My App Started...");
    }
    window.addEventListener("load", Start);
})();