# Shellac.sugar

A thin varnish of text and file actions for Espresso.

## File actions

- **Open Terminal Here** – a temporary replacement for the *Open Parent in Terminal* command in Espresso that seems to be glitchy when assigning a keyboard shortcut to it (hopefully this will be corrected in a future update and this action will not be necessary)
- **Run** – another remake of a baked-in action, but this one prints the output to a shiny built-in console that comes with Ian Beck's [ShellActions.sugar](https://github.com/onecrayon/ShellActions-sugar). *Currently supports Ruby and Python*.
- **Open File in Chocolat** – this is more for a personal itch than anything else, but this command allows you to quickly open the current file in [Chocolat](http://chocolatapp.com/) (which makes development that much sweeter when used with Espresso). This comes in handy when working with Sass/Less/Stylus/Haml/yada/yada/yada!
- *hidden* – when hitting return inside `{}` or `[]` brackets, you get a nicely formatted block (much like what is done in TextMate and Chocolat). Of course this would be much handier w/ auto-paired brackets (coming soon)! 

## Text actions

- **Color format converter** – this little action was inspired by a plugin I recall using in Coda long ago which took a Hex color and converted it to RGBA/RGB (and vice versa). We go a step further here, though, by allowing you to cycle through all common web formats. Thanks to Russ Porosky's [color2color](https://github.com/indyarmy/color2color) color converter and of course Michael Jackson's [wonderful JavaScript ports](http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript) of the color conversion algorithms!

## Coming soon

- Auto-paring brackets and quotes
- Auto-wrapping selections with brackets and quotes
- Maybe a quick file opener (much like Go to File in TextMate, Chocolat and cmd+p in Sublime Text 2)... yeah I know there is *Quick Filter*, but it needs some work ;)

Any other ideas? Get a hold of me.

## Installation

**Requires [Espresso 2.0](http://macrabbit.com/espresso/)** & [**ShellActions.sugar**](https://github.com/onecrayon/ShellActions-sugar)

If you are using Git, (and I'm assuming you are since you're here), just:

    cd ~/Library/Application\ Support/Espresso/Sugars
    git clone git://github.com/peteschaffner/Shellac.sugar.git

Relaunch Espresso, and a new Shellac submenu will be available in your Actions menu and in the File -> Actions submenu. You can then update the Sugar when necessary by running the following command:

    cd ~/Library/Application\ Support/Espresso/Sugars/Shellac.sugar
    git pull