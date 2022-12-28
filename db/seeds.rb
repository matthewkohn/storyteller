# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
puts "Seeding..."

User.create(username: "test")

# Genres
scifi = Genre.create(name: "Sci-Fi")
suspense = Genre.create(name: "Suspense")
action = Genre.create(name: "Action Adventure")
fantasy = Genre.create(name: "Fantasy")
paranormal = Genre.create(name: "Paranormal")
mystery = Genre.create(name: "Mystery")
horror = Genre.create(name: "Horror")
romance = Genre.create(name: "Romance")
other = Genre.create(name: "General/Other")

# Authors
alan = Author.create(name: "Alan Turing")
ada = Author.create(name: "Ada Lovelace")
jk = Author.create(name: "JK Rowling")
george = Author.create(name: "George RR Martin")
james = Author.create(name: "James Joyce")
bill = Author.create(name: "William Faulkner")


# def story_params
#   params.permit(:id, :genre_id, :title)

# Stories
## scifi
spaceship = Story.create(genre_id: scifi[:id], title: "The Scary Spaceship")
new_worlds = Story.create(genre_id: scifi[:id], title: "New Worlds")
robots = Story.create(genre_id: scifi[:id], title: "The Helpful Robot")

## suspense
mind_eraser = Story.create(genre_id: suspense[:id], title: "Mind Eraser")
lottery = Story.create(genre_id: suspense[:id], title: "Forbidden Lottery")
inheritance = Story.create(genre_id: suspense[:id], title: "Inheritance")

## action
takeover = Story.create(genre_id: action[:id], title: "Hostile Takeover")
escape = Story.create(genre_id: action[:id], title: "Escape from Sword Island")
battle = Story.create(genre_id: action[:id], title: "Battle for Evergard")

## fantasy
crystal = Story.create(genre_id: fantasy[:id], title: "The Forever Crystal")
dragon = Story.create(genre_id: fantasy[:id], title: "Dragon Chaser")
mage = Story.create(genre_id: fantasy[:id], title: "The Drunken Mage")

## paranormal
spooky = Story.create(genre_id: paranormal[:id], title: "The Spooky Campground")
possession = Story.create(genre_id: paranormal[:id], title: "Johnny's Possession")
altered = Story.create(genre_id: paranormal[:id], title: "Altered State")

## mystery
hidden = Story.create(genre_id: mystery[:id], title: "The Hidden Letters")
bargain = Story.create(genre_id: mystery[:id], title: "Bargain for Truth")
choices = Story.create(genre_id: mystery[:id], title: "Wrong Choices")

## horror
blood = Story.create(genre_id: horror[:id], title: "Blood Stained Door")
creepy = Story.create(genre_id: horror[:id], title: "Creepy Dollhouse")
demon = Story.create(genre_id: horror[:id], title: "Demon Lawyer")

## romance
forbidden = Story.create(genre_id: romance[:id], title: "Forbidden Love")
timing = Story.create(genre_id: romance[:id], title: "Bad Timing")
gentleman = Story.create(genre_id: romance[:id], title: "Secret Gentleman")

## other
lilac = Story.create(genre_id: other[:id], title: "Lilac Bushes")
how_to = Story.create(genre_id: other[:id], title: "How to Plan a Roadtrip")
family = Story.create(genre_id: other[:id], title: "The Silly Family")


# def paragraph_params
#   params.permit(:id, :author_id, :story_id, :rich_text_str)

# Paragraphs
spaceship-p1 = "<p></p>"
spaceship-p2 = "<p></p>"
spaceship-p3 = "<p></p>"
new_worlds-p1 = "<p></p>"
new_worlds-p2 = "<p></p>"
new_worlds-p3 = "<p></p>"
robots-p1 = "<p></p>"
robots-p2 = "<p></p>"
robots-p3 = "<p></p>"

mind_eraser-p1 = "<p></p>"
mind_eraser-p2 = "<p></p>"
mind_eraser-p3 = "<p></p>"
lottery-p1 = "<p></p>"
lottery-p2 = "<p></p>"
lottery-p3 = "<p></p>"
inheritance-p1 = "<p></p>"
inheritance-p2 = "<p></p>"
inheritance-p3 = "<p></p>"

takeover-p1 = "<p></p>"
takeover-p2 = "<p></p>"
takeover-p3 = "<p></p>"
escape-p1 = "<p></p>"
escape-p2 = "<p></p>"
escape-p3 = "<p></p>"
battle-p1 = "<p></p>"
battle-p2 = "<p></p>"
battle-p3 = "<p></p>"

crystal-p1 = "<p></p>"
crystal-p2 = "<p></p>"
crystal-p3 = "<p></p>"
dragon-p1 = "<p></p>"
dragon-p2 = "<p></p>"
dragon-p3 = "<p></p>"
mage-p1 = "<p></p>"
mage-p2 = "<p></p>"
mage-p3 = "<p></p>"

spooky-p1 = "<p></p>"
spooky-p2 = "<p></p>"
spooky-p3 = "<p></p>"
possession-p1 = "<p></p>"
possession-p2 = "<p></p>"
possession-p3 = "<p></p>"
altered-p1 = "<p></p>"
altered-p2 = "<p></p>"
altered-p3 = "<p></p>"

hidden-p1 = "<p></p>"
hidden-p2 = "<p></p>"
hidden-p3 = "<p></p>"
bargain-p1 = "<p></p>"
bargain-p2 = "<p></p>"
bargain-p3 = "<p></p>"
choices-p1 = "<p></p>"
choices-p2 = "<p></p>"
choices-p3 = "<p></p>"

blood-p1 = "<p></p>"
blood-p2 = "<p></p>"
blood-p3 = "<p></p>"
creepy-p1 = "<p></p>"
creepy-p2 = "<p></p>"
creepy-p3 = "<p></p>"
demon-p1 = "<p></p>"
demon-p2 = "<p></p>"
demon-p3 = "<p></p>"

forbidden-p1 = "<p></p>"
forbidden-p2 = "<p></p>"
forbidden-p3 = "<p></p>"
timing-p1 = "<p></p>"
timing-p2 = "<p></p>"
timing-p3 = "<p></p>"
gentleman-p1 = "<p></p>"
gentleman-p2 = "<p></p>"
gentleman-p3 = "<p></p>"

lilac-p1 = "<p></p>"
lilac-p2 = "<p></p>"
lilac-p3 = "<p></p>"
how_to-p1 = "<p></p>"
how_to-p2 = "<p></p>"
how_to-p3 = "<p></p>"
family-p1 = "<p></p>"
family-p2 = "<p></p>"
family-p3 = "<p></p>"



## scifi
Paragraph.create(author_id: alan[:id], story_id: spaceship[:id], rich_text_str: spaceship-p1)
Paragraph.create(author_id: ada[:id], story_id: spaceship[:id], rich_text_str: spaceship-p2)
Paragraph.create(author_id: jk[:id], story_id: spaceship[:id], rich_text_str: spaceship-p3)

Paragraph.create(author_id: george[:id], story_id: new_worlds[:id], rich_text_str: new_worlds-p1)
Paragraph.create(author_id: james[:id], story_id: new_worlds[:id], rich_text_str: new_worlds-p2)
Paragraph.create(author_id: bill[:id], story_id: new_worlds[:id], rich_text_str: new_worlds-p3)

Paragraph.create(author_id: alan[:id], story_id: robots[:id], rich_text_str: robots-p1)
Paragraph.create(author_id: jk[:id], story_id: robots[:id], rich_text_str: robots-p2)
Paragraph.create(author_id: james[:id], story_id: robots[:id], rich_text_str: robots-p3)

# suspense
Paragraph.create(author_id: ada[:id], story_id: mind_eraser[:id], rich_text_str: mind_eraser-p1)
Paragraph.create(author_id: george[:id], story_id: mind_eraser[:id], rich_text_str: mind_eraser-p2)
Paragraph.create(author_id: bill[:id], story_id: mind_eraser[:id], rich_text_str: mind_eraser-p3)

Paragraph.create(author_id: bill[:id], story_id: lottery[:id], rich_text_str: lottery-p1)
Paragraph.create(author_id: james[:id], story_id: lottery[:id], rich_text_str: lottery-p2)
Paragraph.create(author_id: bill[:id], story_id: lottery[:id], rich_text_str: lottery-p3)

Paragraph.create(author_id: james[:id], story_id: inheritance[:id], rich_text_str: inheritance-p1)
Paragraph.create(author_id: george[:id], story_id: inheritance[:id], rich_text_str: inheritance-p2)
Paragraph.create(author_id: james[:id], story_id: inheritance[:id], rich_text_str: inheritance-p3)

## action
Paragraph.create(author_id: george[:id], story_id: takeover[:id], rich_text_str: takeover-p1)
Paragraph.create(author_id: jk[:id], story_id: takeover[:id], rich_text_str: takeover-p2)
Paragraph.create(author_id: george[:id], story_id: takeover[:id], rich_text_str: takeover-p3)

Paragraph.create(author_id: jk[:id], story_id: escape[:id], rich_text_str: escape-p1)
Paragraph.create(author_id: ada[:id], story_id: escape[:id], rich_text_str: escape-p2)
Paragraph.create(author_id: jk[:id], story_id: escape[:id], rich_text_str: escape-p3)

Paragraph.create(author_id: ada[:id], story_id: battle[:id], rich_text_str: battle-p1)
Paragraph.create(author_id: alan[:id], story_id: battle[:id], rich_text_str: battle-p2)
Paragraph.create(author_id: ada[:id], story_id: battle[:id], rich_text_str: battle-p3)

## fantasy
Paragraph.create(author_id: alan[:id], story_id: crystal[:id], rich_text_str: crystal-p1)
Paragraph.create(author_id: bill[:id], story_id: crystal[:id], rich_text_str: crystal-p2)
Paragraph.create(author_id: alan[:id], story_id: crystal[:id], rich_text_str: crystal-p3)

Paragraph.create(author_id: bill[:id], story_id: dragon[:id], rich_text_str: dragon-p1)
Paragraph.create(author_id: george[:id], story_id: dragon[:id], rich_text_str: dragon-p2)
Paragraph.create(author_id: jk[:id], story_id: dragon[:id], rich_text_str: dragon-p3)

Paragraph.create(author_id: james[:id], story_id: mage[:id], rich_text_str: mage-p1)
Paragraph.create(author_id: jk[:id], story_id: mage[:id], rich_text_str: mage-p2)
Paragraph.create(author_id: ada[:id], story_id: mage[:id], rich_text_str: mage-p3)

## paranormal
Paragraph.create(author_id: george[:id], story_id: spooky[:id], rich_text_str: spooky-p1)
Paragraph.create(author_id: ada[:id], story_id: spooky[:id], rich_text_str: spooky-p2)
Paragraph.create(author_id: alan[:id], story_id: spooky[:id], rich_text_str: spooky-p3)

Paragraph.create(author_id: jk[:id], story_id: possession[:id], rich_text_str: possession-p1)
Paragraph.create(author_id: alan[:id], story_id: possession[:id], rich_text_str: possession-p2)
Paragraph.create(author_id: bill[:id], story_id: possession[:id], rich_text_str: possession-p3)

Paragraph.create(author_id: ada[:id], story_id: altered[:id], rich_text_str: altered-p1)
Paragraph.create(author_id: bill[:id], story_id: altered[:id], rich_text_str: altered-p2)
Paragraph.create(author_id: james[:id], story_id: altered[:id], rich_text_str: altered-p3)

## mystery
Paragraph.create(author_id: alan[:id], story_id: hidden[:id], rich_text_str: hidden-p1)
Paragraph.create(author_id: james[:id], story_id: hidden[:id], rich_text_str: hidden-p2)
Paragraph.create(author_id: george[:id], story_id: hidden[:id], rich_text_str: hidden-p3)

Paragraph.create(author_id: jk[:id], story_id: bargain[:id], rich_text_str: bargain-p1)
Paragraph.create(author_id: james[:id], story_id: bargain[:id], rich_text_str: bargain-p2)
Paragraph.create(author_id: ada[:id], story_id: bargain[:id], rich_text_str: bargain-p3)

Paragraph.create(author_id: bill[:id], story_id: choices[:id], rich_text_str: choices-p1)
Paragraph.create(author_id: alan[:id], story_id: choices[:id], rich_text_str: choices-p2)
Paragraph.create(author_id: george[:id], story_id: choices[:id], rich_text_str: choices-p3)

## horror
Paragraph.create(author_id: george[:id], story_id: blood[:id], rich_text_str: blood-p1)
Paragraph.create(author_id: alan[:id], story_id: blood[:id], rich_text_str: blood-p2)
Paragraph.create(author_id: bill[:id], story_id: blood[:id], rich_text_str: blood-p3)

Paragraph.create(author_id: ada[:id], story_id: creepy[:id], rich_text_str: creepy-p1)
Paragraph.create(author_id: jk[:id], story_id: creepy[:id], rich_text_str: creepy-p2)
Paragraph.create(author_id: james[:id], story_id: creepy[:id], rich_text_str: creepy-p3)

Paragraph.create(author_id: alan[:id], story_id: demon[:id], rich_text_str: demon-p1)
Paragraph.create(author_id: ada[:id], story_id: demon[:id], rich_text_str: demon-p2)
Paragraph.create(author_id: alan[:id], story_id: demon[:id], rich_text_str: demon-p3)

## romance
Paragraph.create(author_id: jk[:id], story_id: forbidden[:id], rich_text_str: forbidden-p1)
Paragraph.create(author_id: george[:id], story_id: forbidden[:id], rich_text_str: forbidden-p2)
Paragraph.create(author_id: james[:id], story_id: forbidden[:id], rich_text_str: forbidden-p3)

Paragraph.create(author_id: bill[:id], story_id: timing[:id], rich_text_str: timing-p1)
Paragraph.create(author_id: ada[:id], story_id: timing[:id], rich_text_str: timing-p2)
Paragraph.create(author_id: alan[:id], story_id: timing[:id], rich_text_str: timing-p3)

Paragraph.create(author_id: ada[:id], story_id: gentleman[:id], rich_text_str: gentleman-p1)
Paragraph.create(author_id: bill[:id], story_id: gentleman[:id], rich_text_str: gentleman-p2)
Paragraph.create(author_id: ada[:id], story_id: gentleman[:id], rich_text_str: gentleman-p3)

## other
Paragraph.create(author_id: james[:id], story_id: lilac[:id], rich_text_str: lilac-p1)
Paragraph.create(author_id: alan[:id], story_id: lilac[:id], rich_text_str: lilac-p2)
Paragraph.create(author_id: james[:id], story_id: lilac[:id], rich_text_str: lilac-p3)

Paragraph.create(author_id: george[:id], story_id: how_to[:id], rich_text_str: how_to-p1)
Paragraph.create(author_id: ada[:id], story_id: how_to[:id], rich_text_str: how_to-p2)
Paragraph.create(author_id: alan[:id], story_id: how_to[:id], rich_text_str: how_to-p3)

Paragraph.create(author_id: james[:id], story_id: family[:id], rich_text_str: family-p1)
Paragraph.create(author_id: jk[:id], story_id: family[:id], rich_text_str: family-p2)
Paragraph.create(author_id: george[:id], story_id: family[:id], rich_text_str: family-p3)


puts "Seeding complete! :)"