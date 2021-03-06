/**
Generated with the following script applied on https://en.wikipedia.org/wiki/List_of_chemical_elements

var elements = [];
for (let index = 0; index <$0.children.length; index++) {
  const tds = document.querySelector('table tbody').children[index].querySelectorAll('td');
  if (tds.length > 3) elements.push({number: Number(tds[0].textContent), name: tds[2].textContent, symbol: tds[1].textContent})
}
// Copy result in clipboard => use ctrl-v to paste the result
copy(elements)
 */

export interface ChemicalElement {
    number: number,
    name: string,
    symbol: string
}

export const chemicalElements: ChemicalElement[] = [
    {
        "number": 1,
        "name": "Hydrogen",
        "symbol": "H"
    },
    {
        "number": 2,
        "name": "Helium",
        "symbol": "He"
    },
    {
        "number": 3,
        "name": "Lithium",
        "symbol": "Li"
    },
    {
        "number": 4,
        "name": "Beryllium",
        "symbol": "Be"
    },
    {
        "number": 5,
        "name": "Boron",
        "symbol": "B"
    },
    {
        "number": 6,
        "name": "Carbon",
        "symbol": "C"
    },
    {
        "number": 7,
        "name": "Nitrogen",
        "symbol": "N"
    },
    {
        "number": 8,
        "name": "Oxygen",
        "symbol": "O"
    },
    {
        "number": 9,
        "name": "Fluorine",
        "symbol": "F"
    },
    {
        "number": 10,
        "name": "Neon",
        "symbol": "Ne"
    },
    {
        "number": 11,
        "name": "Sodium",
        "symbol": "Na"
    },
    {
        "number": 12,
        "name": "Magnesium",
        "symbol": "Mg"
    },
    {
        "number": 13,
        "name": "Aluminium",
        "symbol": "Al"
    },
    {
        "number": 14,
        "name": "Silicon",
        "symbol": "Si"
    },
    {
        "number": 15,
        "name": "Phosphorus",
        "symbol": "P"
    },
    {
        "number": 16,
        "name": "Sulfur",
        "symbol": "S"
    },
    {
        "number": 17,
        "name": "Chlorine",
        "symbol": "Cl"
    },
    {
        "number": 18,
        "name": "Argon",
        "symbol": "Ar"
    },
    {
        "number": 19,
        "name": "Potassium",
        "symbol": "K"
    },
    {
        "number": 20,
        "name": "Calcium",
        "symbol": "Ca"
    },
    {
        "number": 21,
        "name": "Scandium",
        "symbol": "Sc"
    },
    {
        "number": 22,
        "name": "Titanium",
        "symbol": "Ti"
    },
    {
        "number": 23,
        "name": "Vanadium",
        "symbol": "V"
    },
    {
        "number": 24,
        "name": "Chromium",
        "symbol": "Cr"
    },
    {
        "number": 25,
        "name": "Manganese",
        "symbol": "Mn"
    },
    {
        "number": 26,
        "name": "Iron",
        "symbol": "Fe"
    },
    {
        "number": 27,
        "name": "Cobalt",
        "symbol": "Co"
    },
    {
        "number": 28,
        "name": "Nickel",
        "symbol": "Ni"
    },
    {
        "number": 29,
        "name": "Copper",
        "symbol": "Cu"
    },
    {
        "number": 30,
        "name": "Zinc",
        "symbol": "Zn"
    },
    {
        "number": 31,
        "name": "Gallium",
        "symbol": "Ga"
    },
    {
        "number": 32,
        "name": "Germanium",
        "symbol": "Ge"
    },
    {
        "number": 33,
        "name": "Arsenic",
        "symbol": "As"
    },
    {
        "number": 34,
        "name": "Selenium",
        "symbol": "Se"
    },
    {
        "number": 35,
        "name": "Bromine",
        "symbol": "Br"
    },
    {
        "number": 36,
        "name": "Krypton",
        "symbol": "Kr"
    },
    {
        "number": 37,
        "name": "Rubidium",
        "symbol": "Rb"
    },
    {
        "number": 38,
        "name": "Strontium",
        "symbol": "Sr"
    },
    {
        "number": 39,
        "name": "Yttrium",
        "symbol": "Y"
    },
    {
        "number": 40,
        "name": "Zirconium",
        "symbol": "Zr"
    },
    {
        "number": 41,
        "name": "Niobium",
        "symbol": "Nb"
    },
    {
        "number": 42,
        "name": "Molybdenum",
        "symbol": "Mo"
    },
    {
        "number": 43,
        "name": "Technetium",
        "symbol": "Tc"
    },
    {
        "number": 44,
        "name": "Ruthenium",
        "symbol": "Ru"
    },
    {
        "number": 45,
        "name": "Rhodium",
        "symbol": "Rh"
    },
    {
        "number": 46,
        "name": "Palladium",
        "symbol": "Pd"
    },
    {
        "number": 47,
        "name": "Silver",
        "symbol": "Ag"
    },
    {
        "number": 48,
        "name": "Cadmium",
        "symbol": "Cd"
    },
    {
        "number": 49,
        "name": "Indium",
        "symbol": "In"
    },
    {
        "number": 50,
        "name": "Tin",
        "symbol": "Sn"
    },
    {
        "number": 51,
        "name": "Antimony",
        "symbol": "Sb"
    },
    {
        "number": 52,
        "name": "Tellurium",
        "symbol": "Te"
    },
    {
        "number": 53,
        "name": "Iodine",
        "symbol": "I"
    },
    {
        "number": 54,
        "name": "Xenon",
        "symbol": "Xe"
    },
    {
        "number": 55,
        "name": "Caesium",
        "symbol": "Cs"
    },
    {
        "number": 56,
        "name": "Barium",
        "symbol": "Ba"
    },
    {
        "number": 57,
        "name": "Lanthanum",
        "symbol": "La"
    },
    {
        "number": 58,
        "name": "Cerium",
        "symbol": "Ce"
    },
    {
        "number": 59,
        "name": "Praseodymium",
        "symbol": "Pr"
    },
    {
        "number": 60,
        "name": "Neodymium",
        "symbol": "Nd"
    },
    {
        "number": 61,
        "name": "Promethium",
        "symbol": "Pm"
    },
    {
        "number": 62,
        "name": "Samarium",
        "symbol": "Sm"
    },
    {
        "number": 63,
        "name": "Europium",
        "symbol": "Eu"
    },
    {
        "number": 64,
        "name": "Gadolinium",
        "symbol": "Gd"
    },
    {
        "number": 65,
        "name": "Terbium",
        "symbol": "Tb"
    },
    {
        "number": 66,
        "name": "Dysprosium",
        "symbol": "Dy"
    },
    {
        "number": 67,
        "name": "Holmium",
        "symbol": "Ho"
    },
    {
        "number": 68,
        "name": "Erbium",
        "symbol": "Er"
    },
    {
        "number": 69,
        "name": "Thulium",
        "symbol": "Tm"
    },
    {
        "number": 70,
        "name": "Ytterbium",
        "symbol": "Yb"
    },
    {
        "number": 71,
        "name": "Lutetium",
        "symbol": "Lu"
    },
    {
        "number": 72,
        "name": "Hafnium",
        "symbol": "Hf"
    },
    {
        "number": 73,
        "name": "Tantalum",
        "symbol": "Ta"
    },
    {
        "number": 74,
        "name": "Tungsten",
        "symbol": "W"
    },
    {
        "number": 75,
        "name": "Rhenium",
        "symbol": "Re"
    },
    {
        "number": 76,
        "name": "Osmium",
        "symbol": "Os"
    },
    {
        "number": 77,
        "name": "Iridium",
        "symbol": "Ir"
    },
    {
        "number": 78,
        "name": "Platinum",
        "symbol": "Pt"
    },
    {
        "number": 79,
        "name": "Gold",
        "symbol": "Au"
    },
    {
        "number": 80,
        "name": "Mercury",
        "symbol": "Hg"
    },
    {
        "number": 81,
        "name": "Thallium",
        "symbol": "Tl"
    },
    {
        "number": 82,
        "name": "Lead",
        "symbol": "Pb"
    },
    {
        "number": 83,
        "name": "Bismuth",
        "symbol": "Bi"
    },
    {
        "number": 84,
        "name": "Polonium",
        "symbol": "Po"
    },
    {
        "number": 85,
        "name": "Astatine",
        "symbol": "At"
    },
    {
        "number": 86,
        "name": "Radon",
        "symbol": "Rn"
    },
    {
        "number": 87,
        "name": "Francium",
        "symbol": "Fr"
    },
    {
        "number": 88,
        "name": "Radium",
        "symbol": "Ra"
    },
    {
        "number": 89,
        "name": "Actinium",
        "symbol": "Ac"
    },
    {
        "number": 90,
        "name": "Thorium",
        "symbol": "Th"
    },
    {
        "number": 91,
        "name": "Protactinium",
        "symbol": "Pa"
    },
    {
        "number": 92,
        "name": "Uranium",
        "symbol": "U"
    },
    {
        "number": 93,
        "name": "Neptunium",
        "symbol": "Np"
    },
    {
        "number": 94,
        "name": "Plutonium",
        "symbol": "Pu"
    },
    {
        "number": 95,
        "name": "Americium",
        "symbol": "Am"
    },
    {
        "number": 96,
        "name": "Curium",
        "symbol": "Cm"
    },
    {
        "number": 97,
        "name": "Berkelium",
        "symbol": "Bk"
    },
    {
        "number": 98,
        "name": "Californium",
        "symbol": "Cf"
    },
    {
        "number": 99,
        "name": "Einsteinium",
        "symbol": "Es"
    },
    {
        "number": 100,
        "name": "Fermium",
        "symbol": "Fm"
    },
    {
        "number": 101,
        "name": "Mendelevium",
        "symbol": "Md"
    },
    {
        "number": 102,
        "name": "Nobelium",
        "symbol": "No"
    },
    {
        "number": 103,
        "name": "Lawrencium",
        "symbol": "Lr"
    },
    {
        "number": 104,
        "name": "Rutherfordium",
        "symbol": "Rf"
    },
    {
        "number": 105,
        "name": "Dubnium",
        "symbol": "Db"
    },
    {
        "number": 106,
        "name": "Seaborgium",
        "symbol": "Sg"
    },
    {
        "number": 107,
        "name": "Bohrium",
        "symbol": "Bh"
    },
    {
        "number": 108,
        "name": "Hassium",
        "symbol": "Hs"
    },
    {
        "number": 109,
        "name": "Meitnerium",
        "symbol": "Mt"
    },
    {
        "number": 110,
        "name": "Darmstadtium",
        "symbol": "Ds"
    },
    {
        "number": 111,
        "name": "Roentgenium",
        "symbol": "Rg"
    },
    {
        "number": 112,
        "name": "Copernicium",
        "symbol": "Cn"
    },
    {
        "number": 113,
        "name": "Nihonium",
        "symbol": "Nh"
    },
    {
        "number": 114,
        "name": "Flerovium",
        "symbol": "Fl"
    },
    {
        "number": 115,
        "name": "Moscovium",
        "symbol": "Mc"
    },
    {
        "number": 116,
        "name": "Livermorium",
        "symbol": "Lv"
    },
    {
        "number": 117,
        "name": "Tennessine",
        "symbol": "Ts"
    },
    {
        "number": 118,
        "name": "Oganesson",
        "symbol": "Og"
    }
]