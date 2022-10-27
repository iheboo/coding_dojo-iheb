from classes.ninja import Ninja
from classes.pirate import Pirate
from classes.pirate import ZPirate
from classes.pirate import GPirate


michelangelo = Ninja("Michelanglo")

jack_sparrow = Pirate("Jack Sparrow")

michelangelo.attack(jack_sparrow)
jack_sparrow.show_stats()

ali_baba = ZPirate ('ali_baba',"kotan","gold")
ali_baba.show_statsZ()

dongol = GPirate ('dongol',"AK","wodks")
dongol.show_statsG()

hoshi= GPirate ('hoshi',"FMS","hennessy")

hoshi.show_statsG()

pawlo= ZPirate ('pawlo',"ikino","poker chip")
pawlo.show_statsZ()



x = input("choisir votre joueur")
if x !="ZPirate:ali baba" or x!="GPirate:dongol" or x!="Pirate:jack sparrow" or x!="ZPirate:pawlo"or x!="GPirate:hoshi":
    x = input("choisir votre joueur")
else:
    x ="Pirate:jack sparrow"
    x=input("!!!don't play now if you want!!!")
x = input(" votre joueur est jack sparrow ")

oo = input("choisir votre type de jouer : ATC or DUF : ")
if oo != "ATC"  :
    oo = input("i will brok you ")
else:
    oo ="DUF"
    oo = input("  i healing now!! ")
oo= input("***i'm going to my ship***")






