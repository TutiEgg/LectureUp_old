# Einführung in Markdown

## Einleitung
Markdown ist eine Auszeichnungssprache, also eine maschinenlesbare Sprache zur Gliederung und Formatierung von Texten und anderen Daten.  
Sie soll möglichst leicht von Menschen zu lesen sein, daher sind die Auszeichnungselemente relativ einfach.

# Grundlagen der Markdown-Syntax

1. [Fett und Kursiv](#fett-und-kursiv)
2. [Durchstreichen](#durchstreichen)
3. [Überschriften](#überschriften)
4. [Absätze](#absätze)
5. [Zitate](#zitate)
6. [Listen](#listen)
7. [Checklisten](#checklisten)
8. [Hyperlinks](#hyperlinks)
9. [Bilder](#bilder)
10. [Verlinkte Bilder](#verlinkte-bilder)
11. [Tabellen](#tabellen)
12. [Fußnoten](#fußnoten)
13. [Backslash-Maskierung](#backslash-maskierung)

## Fett und Kursiv
Um kursiv zu schreiben, setzen Sie je ein Sternchen (Asterisk) vor und nach den Wörtern. Für Fettungen verwenden Sie zwei.  
Möchten Sie einen Textbereich sowohl fett als auch kursiv setzen, benutzen Sie drei Sternchen. Alternativ können Sie Unterstriche verwenden.

![Fett und Kursiv](/images/markdown-guide/bold-cursive.jpg)

## Durchstreichen
Um einen durchgestrichen Text darzustellen, nutzt man bei Markdown die Tilde zweimal hintereinander, lässt dann den entsprechenden Text folgen und schließt das Element wieder mit zwei Tilden ab. 

![Durchstreichen](/images/markdown-guide/crossed-out.jpg)

## Überschriften
Um eine Überschrift darzustellen, setzt man eine Raute mit einem Leerzeichen Abstand vor den Text.  
Um hierarchisch tiefer liegende Überschriften zu erstellen, setzen Sie zusätzliche Rauten ein. Auf diese Weise lassen sich Überschriften und Unterüberschriften bis zur sechsten Stufe erstellen

![Überschriften](/images/markdown-guide/heading.jpg)

## Absätze
Um einen neuen Textblock zu erstellen, fügt man eine leere Zeile ein. Es reicht, wenn die Zeile optisch leer ist (Leerzeichen o.ä. werden ignoriert).  
Möchte man einen einfachen Zeilenumbruch erstellen, fügt man an das Ende der Zeile zwei Leerzeichen an.

## Zitate
Um einen Textbereich als Zitat zu kennzeichnen, verwenden Sie das Größer-als-Zeichen (>).  
Sie können entweder jede einzelne Zeile mit diesem Zeichen kennzeichnen oder nur eines an den Anfang des Absatzes setzen und den Bereich dann mit einer Leerzeile beenden.

![Zitate](/images/markdown-guide/quote.jpg)

## Listen
Um eine unsortierte Liste zu erstellen, verwenden Sie entweder das Plus-Zeichen, den Bindestrich oder ein Sternchen. Alle drei Varianten führen zum gleichen Ergebnis.

![Unsortierte Liste](/images/markdown-guide/ul.jpg)

Um eine sortierte Liste zu erstellen, verwenden Sie eine Zahl mit einem direkt darauffolgenden Punkt. (Die tatsächlichen Zahlen sind dabei egal).

![Sortierte Liste](/images/markdown-guide/ol.jpg)

## Checklisten
Eine Checkliste erstelle Sie mit eckigen Klammern. Dazwischen setzen Sie entweder ein Leerzeichen oder ein X (für bereits gesetzte Häkchen).

![Checkliste](/images/markdown-guide/checklist.jpg)

Code
Um einen Textbereich als Code zu kennzeichnen, setzen Sie einen Akzent (Backtik) am Anfang und am Ende ein.

![Code](/images/markdown-guide/code.jpg)

Kommt in dem Codebeispiel selbst ein Akzent vor, verwenden Sie das Zeichen einfach doppelt.

![Code](/images/markdown-guide/code2.jpg)

Um einen ganzen Block als Quellcode zu markieren, kann man entweder einen Tabulator oder vier Leerzeichen verwenden – und zwar für jede Zeile.  
Um ausgewählte Zeilen noch weiter einrücken zu lassen, fügen Sie einfach weitere Tabulatoren oder Leerzeichen hinzu. 

![Code](/images/markdown-guide/code3.jpg)

Wenn Sie Codeblöcke lieber mit einem Zeichen einleiten und beenden, können Sie den Bereich mit je drei Akzenten am Anfang und am Ende markieren.  
Automatische farbige Hervorhebungen sind möglich, wenn Sie hier zusätzlich nach den drei einleitenden Akzenten die Sprache des Codes angeben.

![Code](/images/markdown-guide/code4.jpg)

## Hyperlinks
Einen Link erzeugen Sie, indem Sie den Ankertext (die im Text sichtbaren Wörter) in eckige Klammern setzen und direkt darauf in runden Klammern die URL anfügen.  
Optional können Sie noch einen Titel hinzufügen, der erscheint, wenn man mit der Maus darüberfährt: Er steht mit einem Leerzeichen getrennt und in doppelten Anführungszeichen hinter der URL.

![Link](/images/markdown-guide/link.jpg)

Die meisten Markdown-Editoren erzeugen aus URLs und E-Mail-Adressen automatisch klickbare Hyperlinks. Um dies zu forcieren, setzen Sie die URL zwischen Kleiner- und Größer-als-Zeichen. Um es zu verhindern, markieren Sie die URL als Code.

![Link](/images/markdown-guide/link2.jpg)

## Bilder
Möchten Sie ein Bild einfügen, beginnen Sie mit einem Ausrufezeichen. Im Anschluss schreiben Sie eckige Klammern, in denen sich der alternative Text zum Bild befindet. Danach folgt in runden Klammern die URL oder der Pfad.

![Bild](/images/markdown-guide/image.jpg)

### Lokale Bilderpfad
Möchten SIe ein lokales Bild in ihr Markdownfile einbinden, wird dieses Bild im public Ordner der Applikation abgelegt. Der Pfad zum Bild ist kein absoluter Pfad, sondern ein Pfad beginnend aus dem public Ordner
Beispiel Pfad: /images/markdown-guide/image.jpg

## Verlinkte Bilder
Bilder und Hyperlinks lassen sich auch kombinieren. Wenn Sie hinter das Bild einen klickbaren Link setzen möchten, verschachteln Sie die beiden Funktionen miteinander. Das Bild wird hier zum Ankertext und taucht deshalb in den eckigen Klammern auf.

![Verlinktes Bild](/images/markdown-guide/linked-image.jpg)

## Tabellen
Mit Pipes (|) lassen sich in Markdown Tabellen zeichnen. Jede Zelle wird durch eine Pipe getrennt. Um Kopfzeilen zu erzeugen, die sich optisch vom restlichen Inhalt absetzen, unterstreichen Sie die entsprechenden Zellen mit Bindestrichen.

![Tabelle](/images/markdown-guide/table.jpg)

## Fußnoten
In den Fließtext schreiben Sie eine Anmerkungsziffer und lösen diese am Ende der Seite in der Fußnote auf – eine entsprechende Linie wird dabei automatisch erzeugt. Die Anmerkungsziffer ist als Hyperlink formatiert, sodass man bei einem Klick darauf direkt zur entsprechenden Fußnote gelangt. Dafür setzen Sie zuerst die Anmerkungsziffer hinter das gewünschte Wort: In eckigen Klammern schreiben Sie erst ein Zirkumflex und dann die Nummer.

Welche Nummer (auch andere Begriffe sind möglich) Sie einsetzen, ist egal. Wichtig ist, dass Sie die gewählte Bezeichnung auch wieder korrekt auflösen. Dafür setzen Sie die gleiche Ziffer in einer neuen Zeile wieder mit Zirkumflex in eine Klammer, fügen einen Doppelpunkt hinzu und schreiben dann die eigentliche Anmerkung. Diese kann zusätzlich umfassend formatiert werden und sich auch über mehrere Zeilen erstrecken.

![Fußnote](/images/markdown-guide/footnote.jpg)

## Backslash-Maskierung
Markdown nutzt spezifische Symbole zur Auszeichnung, auf die der Parser beim Konvertieren reagiert.

- Asterisk: *
- Bindestrich:
- Unterstrich: _
- Runde Klammern: ()
- Eckige Klammern: []
- Geschweifte Klammern: {}
- Punkt: .
- Ausrufezeichen: !
- Raute: #
- Akzent: `
- Backslash: \

Möchten Sie diese Zeichen in ihrer eigentlichen Bedeutung verwenden, setzen Sie jeweils einen Backslash davor.

![Backslash-Maskierung](/images/markdown-guide/backslash.jpg)