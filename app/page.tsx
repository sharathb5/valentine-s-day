"use client"

import { useState, useCallback } from "react"
import { MenuItem } from "@/components/menu-item"
import { DishModal, type DishData } from "@/components/dish-modal"
import {
  CatSippingWine,
  DogWithBottle,
  BunnySharingPasta,
  MouseWithCheese,
  DuckCouple,
  FoxChef,
  DinnerTableScene,
  HeartDivider,
} from "@/components/animal-illustrations"

const dishes: DishData[] = [
  {
    courseNumber: "Course I",
    courseLabel: "Comfort",
    dishName: "Ramen",
    memoryLabel: "Late Night Cozy",
    description: "Warm broth, tired eyes, and laughing too hard.",
    insideNote: "sorry i dont have a pic of us eating it tg lol",
    memoryText:
      "This was the night we forgot what time it was.\nI love how everything feels softer with you.\nEven when it's just food and us.",
    location: "Kizuki Ramen",
    date: "August 9, 2025",
    photoSrc: "/photos/ramen.jpg",
    photoAlt: "Ramen in a bowl",
  },
  {
    courseNumber: "Course II",
    courseLabel: "Ocean",
    dishName: "Sushi",
    memoryLabel: "Homemade Era",
    description: "Fresh, happy, and slightly overdressed.",
    insideNote: "sorry i dont have a pic of us eating it tg lol",
    memoryText:
      "This was the night we pretended to be fancy.\nI love how you made everything feel like an occasion.\nEven a random Thursday felt like champagne.",
    location: "Zhen's House",
    date: "May 15, 2025",
    photoSrc: "/photos/sushi.jpg",
    photoAlt: "Assorted sushi pieces",
  },
  {
    courseNumber: "Course III",
    courseLabel: "Morning",
    dishName: "Eggs Benny",
    memoryLabel: "lowk don't remember",
    description: "Runny yolks, sleepy smiles, hollandaise on everything.",
    insideNote: "sorry i dont have a pic of us eating it tg lol",
    memoryText:
      "This was the morning that almost didn't happen.\nI love how we showed up anyway.\nHonestly I don't even remember where, but I remember you.",
    location: "Somewhere good",
    date: "December 23, 2024",
    photoSrc: "/photos/eggs-benny.jpg",
    photoAlt: "Eggs Benedict on a plate",
  },
  {
    courseNumber: "Course IV",
    courseLabel: "Date Night",
    dishName: "Really Good Pasta",
    memoryLabel: "We Should Do This More",
    description: "The bowl that made us sit closer.",
    insideNote: "sorry i dont have a pic of us eating it tg lol",
    memoryText:
      "This was the night the candles actually mattered.\nI love how pasta always brings us back to each other.\nThe table got smaller, and I didn't mind.",
    location: "Monty's Red Sauce",
    date: "January 18, 2026",
    photoSrc: "/photos/pasta.jpeg",
    photoAlt: "A bowl of pasta",
  },
  {
    courseNumber: "Course V",
    courseLabel: "Home",
    dishName: "My Mom's Cooking",
    memoryLabel: "Heart Full",
    description: "The meal that felt like being chosen.",
    insideNote: "sorry i dont have a pic of us eating it tg lol",
    memoryText:
      "This was the meal that changed everything.\nI love how my family made you feel like family.\nI knew then — this was it.",
    location: "My House",
    date: "November 28, 2025",
    photoSrc: "/photos/moms-cooking.jpg",
    photoAlt: "Home cooked meal on a plate",
  },
  {
    courseNumber: "Course VI",
    courseLabel: "Spicy",
    dishName: "Chongqing Chicken",
    memoryLabel: "Crying But Worth It",
    description: "Spicy chaos, perfect balance. Every single time.",
    insideNote: "sorry i dont have a pic of us eating it tg lol",
    memoryText:
      "This was the night(s) we couldn't stop crying — from the spice.\nI love how we kept going back.\nIf we can handle this, we can handle anything.",
    location: "Taste of Sichuan",
    date: "Many times",
    photoSrc: "/photos/chongqing-chicken.jpg",
    photoAlt: "Spicy chicken dish",
  },
]

export default function Page() {
  const [activeDish, setActiveDish] = useState<number | null>(null)

  const handleNext = useCallback(() => {
    setActiveDish((prev) => (prev !== null && prev < dishes.length - 1 ? prev + 1 : prev))
  }, [])

  const handlePrev = useCallback(() => {
    setActiveDish((prev) => (prev !== null && prev > 0 ? prev - 1 : prev))
  }, [])

  const handleClose = useCallback(() => {
    setActiveDish(null)
  }, [])

  const leftColumn = dishes.slice(0, 3)
  const rightColumn = dishes.slice(3, 6)

  return (
    <main className="min-h-screen bg-background">
      {/* Wine-red border frame like the Monty's menu */}
      <div className="mx-auto max-w-4xl px-4 py-6 sm:px-8 sm:py-10">
        <div className="border-[3px] border-primary/60 rounded-sm bg-background relative px-6 py-10 sm:px-12 sm:py-16">
          {/* Inner subtle border */}
          <div className="absolute inset-2 border border-primary/20 rounded-sm pointer-events-none" />

          {/* ===== HEADER ===== */}
          <header className="text-center relative z-10 mb-12">
            {/* Cat illustration top-right corner */}
            <CatSippingWine className="absolute -top-4 -right-2 sm:right-4 w-20 sm:w-24 text-primary opacity-70" />

            <h1 className="font-script text-5xl sm:text-7xl text-primary mb-3 leading-tight">
              {"Sharath & Zhen's"}
            </h1>

            <h2 className="font-display text-sm sm:text-base tracking-[0.35em] uppercase text-foreground mb-3">
              {"Valentine's Tasting Menu"}
            </h2>

            <p className="font-serif text-sm text-muted-foreground italic">
              Table for 2 — February 14
            </p>

            <HeartDivider className="w-48 mx-auto mt-6 text-primary" />
          </header>

          {/* ===== MENU SECTION ===== */}
          <section className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
              {/* Left Column */}
              <div>
                {leftColumn.map((dish, i) => (
                  <MenuItem
                    key={i}
                    courseNumber={dish.courseNumber}
                    courseLabel={dish.courseLabel}
                    dishName={dish.dishName}
                    memoryLabel={dish.memoryLabel}
                    description={dish.description}
                    onClick={() => setActiveDish(i)}
                  />
                ))}

                {/* Dog illustration after left column */}
                <div className="flex justify-center mt-2 mb-4">
                  <DogWithBottle className="w-16 text-primary opacity-50" />
                </div>
              </div>

              {/* Right Column */}
              <div>
                {rightColumn.map((dish, i) => (
                  <MenuItem
                    key={i + 3}
                    courseNumber={dish.courseNumber}
                    courseLabel={dish.courseLabel}
                    dishName={dish.dishName}
                    memoryLabel={dish.memoryLabel}
                    description={dish.description}
                    onClick={() => setActiveDish(i + 3)}
                  />
                ))}

                {/* Mouse illustration after right column */}
                <div className="flex justify-center mt-2 mb-4">
                  <MouseWithCheese className="w-16 text-primary opacity-50" />
                </div>
              </div>
            </div>
          </section>

          {/* ===== DECORATIVE SCENE ===== */}
          <div className="mt-10 mb-2 flex justify-center">
            <BunnySharingPasta className="w-48 sm:w-64 text-primary opacity-60" />
          </div>

          {/* ===== CHEF'S NOTE ===== */}
          <section className="text-center relative z-10 mt-8">
            <HeartDivider className="w-48 mx-auto mb-8 text-primary" />

            {/* Fox chef illustration */}
            <FoxChef className="w-20 mx-auto text-primary opacity-50 mb-4" />

            <h3 className="font-display text-sm tracking-[0.35em] uppercase text-primary mb-6">
              {"Chef's Note"}
            </h3>

            <p className="font-serif text-base text-foreground leading-relaxed italic max-w-md mx-auto mb-2">
              {"Thank you for being my favorite person to eat with."}
            </p>
            <p className="font-serif text-base text-foreground leading-relaxed italic max-w-md mx-auto">
              {"I would choose you in every lifetime."}
            </p>

            <HeartDivider className="w-48 mx-auto mt-8 text-primary" />
          </section>

          {/* ===== DINNER TABLE SCENE (BOTTOM) ===== */}
          <div className="mt-8 flex justify-center">
            <DinnerTableScene className="w-full max-w-sm text-primary opacity-50" />
          </div>

          {/* ===== DUCK COUPLE BOTTOM ACCENT ===== */}
          <div className="mt-6 flex justify-center">
            <DuckCouple className="w-36 text-primary opacity-40" />
          </div>

          {/* Footer note */}
          <p className="text-center font-serif text-xs text-muted-foreground mt-8 italic">
            {"20% extra love will be added to parties of 2"}
          </p>
        </div>
      </div>

      {/* ===== MODAL ===== */}
      <DishModal
        dish={activeDish !== null ? dishes[activeDish] : null}
        onClose={handleClose}
        onNext={handleNext}
        onPrev={handlePrev}
        currentIndex={activeDish ?? 0}
        total={dishes.length}
      />
    </main>
  )
}
