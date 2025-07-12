// add-unique-languages.js
// Usage: node add-unique-languages.js
// 1. Fill in the 'newLanguages' array below with language objects to add.
// 2. Run: node add-unique-languages.js
//
// This script will add only unique languages (by name, case-insensitive) to js/languages.js.

const fs = require('fs');
const path = require('path');

const LANGUAGES_PATH = path.join(__dirname, 'js', 'languages.js');

// 1. Fill in this array with new language objects to add:
const newLanguages = [
    {
        "name": "Bosque",
        "year": 2019,
        "creator": "Microsoft Research (Mark Marron)",
        "code": `namespace NSMain;
entity Main {
  function main(): Int {
    print("Hello, World!");
    return 0;
  }
}`,
        "desc": "Bosque is an experimental, regularized programming language from Microsoft Research focused on eliminating sources of complexity such as loops, mutable state, and reference equality.",
        "popularity": 1,
        "categories": ["Experimental", "General Purpose"],
        "primaryCategory": "Experimental",
        "paradigms": ["Functional", "Imperative"],
        "domains": [],
        "difficulty": "Intermediate",
        "typing": "Static",
        "sourceFile": "experimental-languages.js"
    },
    {
        "name": "Dark",
        "year": 2019,
        "creator": "Paul Biggar, Ellen Chisa",
        "code": `let main = "Hello, World!"` ,
        "desc": "Dark is a holistic programming language, editor, and infrastructure for building backend web services with minimal ceremony.",
        "popularity": 1,
        "categories": ["Experimental", "Web"],
        "primaryCategory": "Experimental",
        "paradigms": ["Functional", "Event-driven"],
        "domains": ["Web Development"],
        "difficulty": "Beginner",
        "typing": "Dynamic",
        "sourceFile": "experimental-languages.js"
    },
    {
        "name": "Red/System",
        "year": 2011,
        "creator": "Nenad Rakocevic",
        "code": `print "Hello, World!"`,
        "desc": "Red/System is a low-level, C-like language that serves as the system programming subset of Red, designed for performance and direct hardware access.",
        "popularity": 2,
        "categories": ["Systems", "Low-level"],
        "primaryCategory": "Systems",
        "paradigms": ["Procedural"],
        "domains": ["System Programming"],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "systems-languages.js"
    },
    {
        "name": "Whiley",
        "year": 2009,
        "creator": "David Pearce",
        "code": `method main(System.Console console):
    console.out.println("Hello, World!");`,
        "desc": "Whiley is a programming language designed for verifying programs through its flow-sensitive type system and support for formal specification.",
        "popularity": 1,
        "categories": ["Experimental", "Verification"],
        "primaryCategory": "Experimental",
        "paradigms": ["Imperative", "Functional"],
        "domains": [],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "experimental-languages.js"
    },
    {
        "name": "Idris 2",
        "year": 2020,
        "creator": "Edwin Brady",
        "code": `main : IO ()
main = putStrLn "Hello, World!"`,
        "desc": "Idris 2 is a general-purpose functional programming language with full dependent types, a successor to Idris with a new core and improved performance.",
        "popularity": 1,
        "categories": ["Functional", "Dependent Types"],
        "primaryCategory": "Functional",
        "paradigms": ["Functional"],
        "domains": [],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "functional-languages.js"
    },
    {
        "name": "Vyper",
        "year": 2017,
        "creator": "Ethereum Community",
        "code": `@public
def main():
    return 'Hello, World!'`,
        "desc": "Vyper is a contract-oriented, pythonic programming language targeting the Ethereum Virtual Machine (EVM), designed for security and simplicity.",
        "popularity": 2,
        "categories": ["Blockchain", "Smart Contracts"],
        "primaryCategory": "Blockchain",
        "paradigms": ["Procedural"],
        "domains": ["Blockchain"],
        "difficulty": "Intermediate",
        "typing": "Static",
        "sourceFile": "blockchain-languages.js"
    },
    {
        "name": "Move",
        "year": 2019,
        "creator": "Meta (Facebook) Libra/Diem Team",
        "code": `script {
  fun main() {
    debug::print("Hello, World!");
  }
}`,
        "desc": "Move is a safe and flexible programming language for the Libra/Diem blockchain, designed for secure resource management and smart contracts.",
        "popularity": 2,
        "categories": ["Blockchain", "Smart Contracts"],
        "primaryCategory": "Blockchain",
        "paradigms": ["Resource-oriented", "Procedural"],
        "domains": ["Blockchain"],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "blockchain-languages.js"
    },
    {
        "name": "Motoko",
        "year": 2019,
        "creator": "DFINITY Foundation",
        "code": `actor Main {
  public func main() : async () {
    Debug.print("Hello, World!");
  }
}`,
        "desc": "Motoko is a modern, actor-based programming language for the Internet Computer blockchain, designed for building secure, scalable, and efficient canister smart contracts.",
        "popularity": 2,
        "categories": ["Blockchain", "Smart Contracts"],
        "primaryCategory": "Blockchain",
        "paradigms": ["Actor", "Functional", "Imperative"],
        "domains": ["Blockchain"],
        "difficulty": "Intermediate",
        "typing": "Static",
        "sourceFile": "blockchain-languages.js"
    },
    {
        "name": "F*",
        "year": 2011,
        "creator": "Microsoft Research",
        "code": `let main () =
  print_endline "Hello, World!"`,
        "desc": "F* (F star) is a functional programming language aimed at program verification, with dependent types and effectful programming.",
        "popularity": 1,
        "categories": ["Functional", "Verification"],
        "primaryCategory": "Functional",
        "paradigms": ["Functional", "Dependent Types"],
        "domains": ["Formal Verification"],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "functional-languages.js"
    },
    {
        "name": "ReasonML",
        "year": 2016,
        "creator": "Facebook",
        "code": `let () = print_endline "Hello, World!";`,
        "desc": "ReasonML is a syntax extension and toolchain for OCaml, created by Facebook to provide a familiar syntax for JavaScript developers and strong type inference.",
        "popularity": 3,
        "categories": ["Functional", "Web"],
        "primaryCategory": "Functional",
        "paradigms": ["Functional", "Imperative"],
        "domains": ["Web Development"],
        "difficulty": "Intermediate",
        "typing": "Static",
        "sourceFile": "functional-languages.js"
    },
    {
        "name": "Elvish",
        "year": 2016,
        "creator": "Zhanyong Wan",
        "code": `echo 'Hello, World!'`,
        "desc": "Elvish is an expressive programming language and interactive shell, designed for both scripting and interactive use.",
        "popularity": 1,
        "categories": ["Shell", "Scripting"],
        "primaryCategory": "Shell",
        "paradigms": ["Functional", "Imperative"],
        "domains": ["System Administration"],
        "difficulty": "Beginner",
        "typing": "Dynamic",
        "sourceFile": "shell-languages.js"
    },
    {
        "name": "Odin",
        "year": 2016,
        "creator": "Ginger Bill",
        "code": `package main
import "core:fmt"
main :: proc() {
    fmt.println("Hello, World!")
}`,
        "desc": "Odin is a programming language designed for high performance, simplicity, and modern systems programming, as an alternative to C.",
        "popularity": 2,
        "categories": ["Systems", "Low-level"],
        "primaryCategory": "Systems",
        "paradigms": ["Procedural", "Imperative"],
        "domains": ["System Programming"],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "systems-languages.js"
    },
    {
        "name": "Hare",
        "year": 2021,
        "creator": "Drew DeVault",
        "code": `export fn main() void = {
    fmt::println("Hello, World!");
};`,
        "desc": "Hare is a systems programming language designed to be simple, stable, and robust, with a focus on correctness and maintainability.",
        "popularity": 1,
        "categories": ["Systems", "Low-level"],
        "primaryCategory": "Systems",
        "paradigms": ["Procedural", "Imperative"],
        "domains": ["System Programming"],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "systems-languages.js"
    },
    {
        "name": "Cairo",
        "year": 2020,
        "creator": "StarkWare",
        "code": `func main() {
    printf("Hello, World!");
    return (); 
}`,
        "desc": "Cairo is a Turing-complete language for writing provable programs on blockchain, used for StarkNet and other zero-knowledge applications.",
        "popularity": 2,
        "categories": ["Blockchain", "Smart Contracts"],
        "primaryCategory": "Blockchain",
        "paradigms": ["Procedural"],
        "domains": ["Blockchain"],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "blockchain-languages.js"
    },
    {
        "name": "Scilla",
        "year": 2018,
        "creator": "Zilliqa Team",
        "code": `(* Hello World in Scilla *)
import ListUtils

let main =
  let _ = ListUtils.print_string "Hello, World!" in
  ()`,
        "desc": "Scilla is an intermediate-level smart contract language for Zilliqa, designed for safety and formal verification.",
        "popularity": 1,
        "categories": ["Blockchain", "Smart Contracts"],
        "primaryCategory": "Blockchain",
        "paradigms": ["Functional"],
        "domains": ["Blockchain"],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "blockchain-languages.js"
    },
    {
        "name": "Solidity",
        "year": 2014,
        "creator": "Ethereum Foundation",
        "code": `pragma solidity ^0.8.0;
contract HelloWorld {
    function sayHello() public pure returns (string memory) {
        return "Hello, World!";
    }
}`,
        "desc": "Solidity is the most widely used smart contract programming language for Ethereum and EVM-compatible blockchains.",
        "popularity": 10,
        "categories": ["Blockchain", "Smart Contracts"],
        "primaryCategory": "Blockchain",
        "paradigms": ["Contract-oriented", "Object-Oriented"],
        "domains": ["Blockchain"],
        "difficulty": "Intermediate",
        "typing": "Static",
        "sourceFile": "blockchain-languages.js"
    },
    {
        "name": "Pact",
        "year": 2017,
        "creator": "Kadena",
        "code": `(define pact-id "hello-world")
(define (main)
  (enforce true "Hello, World!"))`,
        "desc": "Pact is a smart contract language for the Kadena blockchain, designed for safety, upgradability, and ease of use.",
        "popularity": 1,
        "categories": ["Blockchain", "Smart Contracts"],
        "primaryCategory": "Blockchain",
        "paradigms": ["Functional", "Declarative"],
        "domains": ["Blockchain"],
        "difficulty": "Intermediate",
        "typing": "Static",
        "sourceFile": "blockchain-languages.js"
    },
    {
        "name": "Reach",
        "year": 2020,
        "creator": "Reach.sh",
        "code": `export const main = () => {
  console.log("Hello, World!");
};`,
        "desc": "Reach is a high-level programming language for building decentralized applications on multiple blockchains, focusing on safety and developer productivity.",
        "popularity": 1,
        "categories": ["Blockchain", "Smart Contracts"],
        "primaryCategory": "Blockchain",
        "paradigms": ["Functional", "Imperative"],
        "domains": ["Blockchain"],
        "difficulty": "Intermediate",
        "typing": "Static",
        "sourceFile": "blockchain-languages.js"
    },
    {
        "name": "Plutus",
        "year": 2017,
        "creator": "IOHK (Cardano)",
        "code": `main :: IO ()
main = putStrLn "Hello, World!"`,
        "desc": "Plutus is a smart contract development platform and language for Cardano, based on Haskell and designed for secure financial contracts.",
        "popularity": 2,
        "categories": ["Blockchain", "Smart Contracts"],
        "primaryCategory": "Blockchain",
        "paradigms": ["Functional"],
        "domains": ["Blockchain"],
        "difficulty": "Advanced",
        "typing": "Static",
        "sourceFile": "blockchain-languages.js"
    },
    {
        "name": "DAML",
        "year": 2016,
        "creator": "Digital Asset Holdings",
        "code": `template HelloWorld
  with
    party : Party
  where
    signatory party
    controller party can
      Create : ContractId HelloWorld
        with
          party = party
        do
          create this`,
        "desc": "DAML is a smart contract language for distributed ledgers, designed for safety, expressiveness, and ease of use.",
        "popularity": 2,
        "categories": ["Blockchain", "Smart Contracts"],
        "primaryCategory": "Blockchain",
        "paradigms": ["Functional", "Declarative"],
        "domains": ["Blockchain"],
        "difficulty": "Intermediate",
        "typing": "Static",
        "sourceFile": "blockchain-languages.js"
    }
];

function loadLanguages() {
    const file = fs.readFileSync(LANGUAGES_PATH, 'utf8');
    const match = file.match(/var languages = (\[.*\]);/s);
    if (!match) throw new Error('Could not find languages array in js/languages.js');
    return JSON.parse(match[1]);
}

function saveLanguages(languages) {
    const file = fs.readFileSync(LANGUAGES_PATH, 'utf8');
    const newArray = JSON.stringify(languages, null, 4);
    const updated = file.replace(/var languages = (\[.*\]);/s, `var languages = ${newArray};`);
    fs.writeFileSync(LANGUAGES_PATH, updated, 'utf8');
}

function main() {
    let languages = loadLanguages();
    const existingNames = new Set(languages.map(l => l.name.toLowerCase()));
    let added = 0, skipped = 0;
    for (const lang of newLanguages) {
        if (existingNames.has(lang.name.toLowerCase())) {
            skipped++;
        } else {
            languages.push(lang);
            existingNames.add(lang.name.toLowerCase());
            added++;
        }
    }
    saveLanguages(languages);
    console.log(`Added ${added} new languages. Skipped ${skipped} duplicates.`);
}

main(); 