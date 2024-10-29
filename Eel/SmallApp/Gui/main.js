$("#btn-submit").on("click", getName);
$("#btn-send-to-py").on("click", test);

function getName(e) {
    var name = $("#users-name").val();
    //Async returns
    //eel.return_greeting(name)().then(setName);
    //eel.return_greeting(name)(setName);
    //Synchronous returns
    eel.return_greeting(name)().then(setName);
}

function setName(value) {
    $("#greeting").text(value);
    run();
    eel.App()();
}

async function run() {
// Inside a function marked 'async' we can use the 'await' keyword.

    let n = await eel.py_random()(); // Must prefix call with 'await', otherwise it's the same syntax
    console.log("Got this from Python: " + n);
}

eel.expose(test);
function test(e) {
    eel.testFunction()();
    return $("#greeting").text();
}
