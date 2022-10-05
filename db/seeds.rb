# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
puts "Seeding..."

# User.create(username: "test")
Genre.create(name: "Sci-Fi")
Genre.create(name: "Suspense")
Genre.create(name: "Action Adventure")
Genre.create(name: "Fantasy")
Genre.create(name: "Paranormal")
Genre.create(name: "Mystery")
Genre.create(name: "Horror")
Genre.create(name: "Romance")
Genre.create(name: "General/Other")


puts "Seeding complete! :)"