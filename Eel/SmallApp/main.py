import eel
eel.init('Gui', allowed_extensions=['.js', '.html']) #web folder

@eel.expose
def return_greeting(name):
    return f"Hello there, {name}!"


@eel.expose
def App():
    print("Application running")

#App()

eel.start('index.html', size=(500,600)) #mode='chrome', 'electron', 'edge', 'custom'

def testFunction():
    temp = eel.test()()
    print(temp)

def py_random():
    return "Hi"

eel.expose(py_random)