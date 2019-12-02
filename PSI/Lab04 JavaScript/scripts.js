function odgadnijLiczbe()
{
    const randomLiczba = Math.ceil(Math.random() * 10);

    liczba = document.getElementById("liczba").value;

    if (randomLiczba == liczba) {
        document.getElementById("resultatPorownania").innerHTML = "Zgadłeś twoja liczba to " + liczba;
    } else {
        document.getElementById("resultatPorownania").innerHTML = "False";
    }
}

document.getElementById("comparer-btn").addEventListener("click", odgadnijLiczbe);

function mulLiczby()
{
    liczba1 = document.getElementById("firstNumber").value;
    liczba2 = document.getElementById("secondNumber").value;

    document.getElementById("resultatMulDiv").innerHTML = liczba1 * liczba2;
}

function divLiczby()
{
    liczba1 = document.getElementById("firstNumber").value;
    liczba2 = document.getElementById("secondNumber").value;

    document.getElementById("resultatMulDiv").innerHTML = liczba1 / liczba2;
}

document.getElementById("multiply-btn").addEventListener("click", mulLiczby);

document.getElementById("divide-btn").addEventListener("click", divLiczby);

function konwertujTemperature()
{
    tempTyp = document.getElementById("temperaturaTyp").value;
    temp = document.getElementById("temperatura").value;

    if (tempTyp == "C") {
        document.getElementById("resultatTemperatura").innerHTML = (9 * temp + (32 * 5)) / 5 + " F";
    }
    else if (tempTyp == "F") {
        document.getElementById("resultatTemperatura").innerHTML = (5 * (temp - 32)) / 9 + " C";
    }
}

document.getElementById("konwertuj-btn").addEventListener("click", konwertujTemperature);

function exp()
{
    n = document.getElementById("firstNumberExp").value;
    a = document.getElementById("secondNumberExp").value;

    var ans = 1;
    for (var i =1; i <= n; i++)
    {
        ans = a * ans;        
    }
    document.getElementById("resultatExp").innerHTML = ans;
}

document.getElementById("exp-btn").addEventListener("click", exp);

function silnia(n)
{
    if (n === 0)
    {
        return 1;
    }
    return n * silnia(n-1);
}

function wyliczSilnie(n)
{
    n = document.getElementById("firstNumberSilnia").value;

    document.getElementById("resultatSilnia").innerHTML = silnia(n);
}

document.getElementById("silnia-btn").addEventListener("click", wyliczSilnie);

function posortuj()
{
    arr1=[-3,8,7,6,5,-4,3,2,1];
    arr2=[];
    min=arr1[0];
    pos=0;
    max=arr1[0];
    for (i=0; i<arr1.length; i++)
    {
        if (max<arr1[i]) max=arr1[i];
    }

    for (i=0;i<arr1.length;i++)
    {
        for (j=0;j<arr1.length;j++)
        {
            if (arr1[j]!="x")
            {
                if (min>arr1[j]) 
                {
                    min=arr1[j];
                    pos=j;
                }
            }
        }
        arr2[i]=min;
        arr1[pos]="x";
        min=max;
    }

    document.getElementById("resultatSortowania").innerHTML = arr2;
}

document.getElementById("sortowanie-btn").addEventListener("click", posortuj);
