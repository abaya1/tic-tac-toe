var button = document.getElementsByClassName('square');
var evenorodd = 0;
var value = 0;
var gamecounter = 0;

var gameboard = [3,4,5,6,7,8,9,10,11]
for( b of button )
{
b.addEventListener('click', turn);
b.addEventListener('click', anim);
b.addEventListener('mouseover', hov);
b.addEventListener('mouseout', ehov);
}

document.getElementById('reset').addEventListener( 'click' , resetgame);


function turn()
{
    value = parseInt(this.value);
    gameboard[value] = evenorodd % 2;
    console.log(value);
    console.log("turn");
    evenorodd++;
    gamecounter++;
    if(evenorodd % 2 == 1)
    {
        document.getElementById('oturn').style.display = 'block';
        document.getElementById('xturn').style.display = 'none';
        console.log("turnX");
        button[value].innerHTML = ' X '
        button[value].style.disabled = 'true';
    }
    else
    {
        document.getElementById('oturn').style.display = 'none';
        document.getElementById('xturn').style.display = 'block';
        console.log("turn0");
        button[value].innerHTML = ' O ';
        button[value].style.disabled = 'true';
    }

    button[value].removeEventListener('click' , turn);

    checkwin();
}

function checkwin()
{
    console.log("checkingwin")


    if(gameboard[0] == gameboard[1] && gameboard[1] == gameboard[2])
    {
        if(gameboard[0] == 0)
        {
            document.getElementById('xwin').style.display = 'block';
            document.getElementById('owin').style.display = 'none';
            document.getElementById('xturn').style.display = 'none';
            document.getElementById('oturn').style.display = 'none';

            for( b of button )
            {
                b.removeEventListener('click', turn);
            }
        }
        else
        {
            document.getElementById('xwin').style.display = 'none';
            document.getElementById('owin').style.display = 'block';
            document.getElementById('xturn').style.display = 'none';
            document.getElementById('oturn').style.display = 'none';

            for( b of button )
            {
                b.removeEventListener('click', turn);
            }
        }

        document.getElementById('reset').style.display = 'block';

    }
    else if(gameboard[0] == gameboard[3] && gameboard[3] == gameboard[6])
    {
        if(gameboard[0] == 0)
        {
            document.getElementById('xwin').style.display = 'block';
            document.getElementById('owin').style.display = 'none';
            document.getElementById('xturn').style.display = 'none';
            document.getElementById('oturn').style.display = 'none';

            for( b of button )
            {
                b.removeEventListener('click', turn);
            }

        }
        else
        {
            document.getElementById('xwin').style.display = 'none';
            document.getElementById('owin').style.display = 'block';
            document.getElementById('xturn').style.display = 'none';
            document.getElementById('oturn').style.display = 'none';

            for( b of button )
            {
                b.removeEventListener('click', turn);
            }
        }

        document.getElementById('reset').style.display = 'block';

    }
    else if(gameboard[6] == gameboard[7] && gameboard[7] == gameboard[8])
    {
        if(gameboard[6] == 0)
        {
            document.getElementById('xwin').style.display = 'block';
            document.getElementById('owin').style.display = 'none';
            document.getElementById('xturn').style.display = 'none';
            document.getElementById('oturn').style.display = 'none';

            for( b of button )
            {
                b.removeEventListener('click', turn);
            }

        }
        else
        {
            document.getElementById('xwin').style.display = 'none';
            document.getElementById('owin').style.display = 'block';
            document.getElementById('xturn').style.display = 'none';
            document.getElementById('oturn').style.display = 'none';

            for( b of button )
            {
                b.removeEventListener('click', turn);
            }
        }

        document.getElementById('reset').style.display = 'block';

    }
    else if(gameboard[8] == gameboard[5] && gameboard[5] == gameboard[2] )
    {
        if(gameboard[8] == 0)
        {
            document.getElementById('xwin').style.display = 'block';
            document.getElementById('owin').style.display = 'none';
            document.getElementById('xturn').style.display = 'none';
            document.getElementById('oturn').style.display = 'none';

            for( b of button )
            {
                b.removeEventListener('click', turn);
            }

        }
        else
        {
            document.getElementById('xwin').style.display = 'none';
            document.getElementById('owin').style.display = 'block';
            document.getElementById('xturn').style.display = 'none';
            document.getElementById('oturn').style.display = 'none';

            for( b of button )
            {
                b.removeEventListener('click', turn);
            }
        }

        document.getElementById('reset').style.display = 'block';
        
    }
    else if( gameboard[0] == gameboard[4] && gameboard[4] == gameboard[8])
    {
        if(gameboard[0] == 0)
        {
            document.getElementById('xwin').style.display = 'block';
            document.getElementById('owin').style.display = 'none';
            document.getElementById('xturn').style.display = 'none';
            document.getElementById('oturn').style.display = 'none';

            for( b of button )
            {
                b.removeEventListener('click', turn);
            }

        }
        else
        {
            document.getElementById('xwin').style.display = 'none';
            document.getElementById('owin').style.display = 'block';
            document.getElementById('xturn').style.display = 'none';
            document.getElementById('oturn').style.display = 'none';

            for( b of button )
            {
                b.removeEventListener('click', turn);
            }
        }

        document.getElementById('reset').style.display = 'block';
        
    }
    else if( gameboard[2] == gameboard[4] && gameboard[4] == gameboard[6])
    {
        if(gameboard[2] == 0)
        {
            document.getElementById('xwin').style.display = 'block';
            document.getElementById('owin').style.display = 'none';
            document.getElementById('xturn').style.display = 'none';
            document.getElementById('oturn').style.display = 'none';

            for( b of button )
            {
                b.removeEventListener('click', turn);
            }

        }
        else
        {
            document.getElementById('xwin').style.display = 'none';
            document.getElementById('owin').style.display = 'block';
            document.getElementById('xturn').style.display = 'none';
            document.getElementById('oturn').style.display = 'none';

            for( b of button )
            {
                b.removeEventListener('click', turn);
            }
        }

        document.getElementById('reset').style.display = 'block';
        
    }
    else if( gameboard[7] == gameboard[4] && gameboard[4] == gameboard[1])
    {
        if(gameboard[7] == 0)
        {
            document.getElementById('xwin').style.display = 'block';
            document.getElementById('owin').style.display = 'none';
            document.getElementById('xturn').style.display = 'none';
            document.getElementById('oturn').style.display = 'none';

            for( b of button )
            {
                b.removeEventListener('click', turn);
            }

        }
        else
        {
            document.getElementById('xwin').style.display = 'none';
            document.getElementById('owin').style.display = 'block';
            document.getElementById('xturn').style.display = 'none';
            document.getElementById('oturn').style.display = 'none';

            for( b of button )
            {
                b.removeEventListener('click', turn);
            }
        }

        document.getElementById('reset').style.display = 'block';
        
    }
    else if( gameboard[3] == gameboard[4] && gameboard[4] == gameboard[5])
    {
        if(gameboard[3] == 0)
        {
            document.getElementById('xwin').style.display = 'block';
            document.getElementById('owin').style.display = 'none';
            document.getElementById('xturn').style.display = 'none';
            document.getElementById('oturn').style.display = 'none';

            for( b of button )
            {
                b.removeEventListener('click', turn);
            }

        }
        else
        {
            document.getElementById('xwin').style.display = 'none';
            document.getElementById('owin').style.display = 'block';
            document.getElementById('xturn').style.display = 'none';
            document.getElementById('oturn').style.display = 'none';

            for( b of button )
            {
                b.removeEventListener('click', turn);
            }
        }

        document.getElementById('reset').style.display = 'block';
        
    }

    if(gamecounter >= 9)
    {
        document.getElementById('tie').style.display = 'block';
        document.getElementById('xwin').style.display = 'none';
        document.getElementById('owin').style.display = 'none';
        document.getElementById('xturn').style.display = 'none';
        document.getElementById('oturn').style.display = 'none';
        document.getElementById('reset').style.display = 'block';

    }

}



function resetgame()
    {
        window.location.reload();
    }


function hov()
{
    if(evenorodd % 2 == 1)
    {
        button.style.color = " grey";
        button.innerHTML("X")
    }
    else
    {
        button.style.color = " grey";
        button.innerHTML("O");
    }
}

function ehov()
{
    button.style.color = "white";
}


function anim()
{
    var end = setInterval(10, anime)
}

