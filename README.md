# Kolokwium
## Przygotowanie do kolokwium:
1) Proszę pobrać gałąź kolokwium w formie pliku zip. A następnie wypakować jego zawartość.
2) Proszę uruchomić przeglądarkę i przejść pod adres: https://devdocs.io/
3) Następnie proszę przejść do `Preferences -> Import`.
  ![Alt text](Img/2020_01_17_10_19_11_DevDocs_API_Documentation.png?raw=true)
  ![Alt text](Img/2020_01_17_10_20_08_Preferences_DevDocs.png?raw=true)
4) Proszę wybrać plik `../Documentation/devdocs.json` znajdujący się w pobranym repozytorium.
  ![Alt text](Img/2020_01_17_10_21_04_Otwieranie.png?raw=true)
5) W ostatnim kroku proszę się upewnić że wszystkie potrzebne pliki z dokumentacją są zainstalowane.
  ![Alt text](Img/2020_01_17_10_26_06_PSI.png?raw=true)
  ![Alt text](Img/2020_01_17_10_26_41_DevDocs_API_Documentation.png?raw=true)
  ![Alt text](Img/2020_01_17_10_28_09_Offline_DevDocs.png?raw=true)


## Ajax dla plików lokalnych

W przypadku techniki Ajax pobieranie danych z plików lokalnych jest zabronione przez CORS ze względów bezpieczeństwa. 
Aby korzystać z tych plików należy uruchomić chrome z flagą `--allow-file-access-from-files` . 
Proszę uruchomić wiersz poleceń (CMD) a następnie uruchomić poniższe polecenie: 
`start chrome --allow-file-access-from-files`
Teraz będzie możliwe wykonywanie asynchonicznych requestów do plikow lokalnych.
![Alt text](Img/cmd.png?raw=true)


