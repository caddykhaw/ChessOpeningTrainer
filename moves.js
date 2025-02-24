const openings = {
    white: {
        "Ruy Lopez": {
            moves: ["1. e4 e5", "2. Nf3 Nc6", "3. Bb5 a6", "4. Ba4 Nf6", "5. O-O Be7"],
            summary: "Ruy Lopez is straight fire, fam! Been slappin’ since the 1500s—old school rizz on fleek! It’s all about flexin’ center control and quick dev. Magnus Carlsen’s the king, no cap. Yeet those pawns and vibe hard—total GOAT move! 🌟 Catch this balanced banger and slay! 💪",
            stats: "Frequency: ~25%, Winning rate: ~52%"
        },
        "Italian Game": {
            moves: ["1. e4 e5", "2. Nf3 Nc6", "3. Bc4 Bc5", "4. d4 exd4"],
            summary: "Italian Game’s aggro and lit, fam! Poppin’ since the 1600s, it’s pure sauce for quick plays. Hikaru Nakamura slays this vibe—center pressure’s his jam! Slap those pieces down and flex, no sus moves allowed. Bet you’ll cook with this classic! 🍝 Big W energy! 🔥",
            stats: "Frequency: ~15%, Winning rate: ~50%"
        },
        "Queen's Gambit": {
            moves: ["1. d4 d5", "2. c4 e6", "3. Nc3 Nf6", "4. Bg5 Be7"],
            summary: "Queen’s Gambit is a banger, fam! Been wavy since forever—Netflix made it iconic, no cap! Fabiano Caruana’s the champ, owning that pawn structure rizz. It’s all about chill strategy and long-term slay. Yeet that c4 and vibe—total sigma move! 🎯 Bet you’ll flex hard! ✨",
            stats: "Frequency: ~12%, Winning rate: ~53%"
        },
        "Scotch Game": {
            moves: ["1. e4 e5", "2. Nf3 Nc6", "3. d4 exd4", "4. Nxd4 Nf6"],
            summary: "Scotch Game’s wild and aggro, fam! Open lines since the 1800s—pure chaos vibes! Garry Kasparov smashed it back in the day, no cap. Hit ‘em with fast plays and flex that center. Bet you’ll yeet those knights and slay—lit energy all day! 🚀 Total bop! 🔥",
            stats: "Frequency: ~8%, Winning rate: ~51%"
        },
        "King's Indian Attack": {
            moves: ["1. Nf3 d5", "2. g3 Nf6", "3. Bg2 e6", "4. O-O Be7"],
            summary: "KIA’s chill and sneaky, fam! Bobby Fischer vibed with this kingside fortress—sigma rizz! It’s been lowkey since the 1950s, no cap. Flex that patience and build a tanky setup. Yeet those pieces slow and slay later—bet you’ll own it! 🛡️ Mad respect for this chillax! 🌟",
            stats: "Frequency: ~6%, Winning rate: ~49%"
        },
        "English Opening": {
            moves: ["1. c4 e5", "2. Nc3 Nf6", "3. g3 d5", "4. cxd5 Nxd5"],
            summary: "English Opening’s wavy and strategic, fam! British tea since the 1840s—peak rizz! Levon Aronian’s the GOAT, flexin’ flank vibes. Sneaky center control’s the move, no cap. Yeet that c4 and vibe—bet you’ll cook with this chill banger! 🏴󠁧󠁢󠁥󠁮󠁧󠁿 Slay hard, fam! 😎",
            stats: "Frequency: ~5%, Winning rate: ~52%"
        },
        "King's Gambit": {
            moves: ["1. e4 e5", "2. f4 exf4", "3. Nf3 d5"],
            summary: "King’s Gambit’s extra and wild, fam! Been chaotic since the 1600s—pure fire! Nigel Short owned this pawn-yeet madness, no cap. Flex that attack rizz and go ham—bet you’ll slap ‘em silly! Fun fact: it’s OG aggro vibes all day! ⚡ Slay or get slayed! 💥",
            stats: "Frequency: ~4%, Winning rate: ~48%"
        },
        "Four Knights Game": {
            moves: ["1. e4 e5", "2. Nf3 Nc6", "3. Nc3 Nf6", "4. d4 exd4"],
            summary: "Four Knights is chill and knight-heavy, fam! Been a basic slay since forever—total vibe! Vishy Anand’s the king, flexin’ symmetry rizz. Drop those horsies and keep it smooth, no Ohio moves. Bet you’ll yeet this balanced banger—lit for all levels! 🐴 Glow up! 🌈",
            stats: "Frequency: ~3%, Winning rate: ~50%"
        },
        "Vienna Game": {
            moves: ["1. e4 e5", "2. Nc3 Nf6", "3. f4 d5"],
            summary: "Vienna’s aggro and spicy, fam! Austrian sauce since the 1800s—mad rizz! Wesley So slays this pawn-push vibe, no cap. Mix quick dev with center heat—bet you’ll yeet that f4 and flex! Slap the board and cook, fam—total bop! 🎉 Lit energy! 🔥",
            stats: "Frequency: ~2.5%, Winning rate: ~51%"
        },
        "Bishop's Opening": {
            moves: ["1. e4 e5", "2. Bc4 Nf6", "3. d4 exd4"],
            summary: "Bishop’s Opening’s snappy and lit, fam! Been lowkey since the 1700s—aims at f7 with rizz! Ian Nepo’s the champ, flexin’ quick attacks. Yeet that bishop and vibe—bet you’ll slap ‘em fast, no cap! Fun fact: it’s beginner tea all day! 👀 Slay it! 😎",
            stats: "Frequency: ~2%, Winning rate: ~49%"
        },
        "Ponziani Opening": {
            moves: ["1. e4 e5", "2. Nf3 Nc6", "3. c3 Nf6", "4. d4 Nxe4"],
            summary: "Ponziani’s rare and spicy, fam! Italian vibes since the 1700s—underrated rizz! Ding Liren slays this center flex, no cap. Drop that c3 heat and yeet the pawns—bet you’ll cook ‘em silly! Fun fact: it’s sneaky sauce for days! 🍝 Glow up, fam! 🌟",
            stats: "Frequency: ~1.5%, Winning rate: ~48%"
        },
        "Evans Gambit": {
            moves: ["1. e4 e5", "2. Nf3 Nc6", "3. Bc4 Bc5", "4. b4 Bxb4", "5. c3 Ba5"],
            summary: "Evans Gambit’s sharp and chaotic, fam! Captain Evans dropped it in 1827—peak rizz! Kasparov owned this pawn-gamble vibe, no cap. Flex that attack and yeet the b4—bet you’ll slap ‘em hard! Fun fact: it’s wild aggro tea forever! ⚡ Slay queen energy! 💪",
            stats: "Frequency: ~1%, Winning rate: ~50%"
        },
        "Danish Gambit": {
            moves: ["1. e4 e5", "2. d4 exd4", "3. c3 dxc3", "4. Bc4 cxb2"],
            summary: "Danish Gambit’s extra and risky, fam! Danish dynamite since the 1800s—mad rizz! Alekhine slayed this double-pawn yeet, no cap. Open lines and chaos vibes—bet you’ll flex hard and cook! Fun fact: it’s wild sauce for the bold! 💣 Glow up or go home! 🌈",
            stats: "Frequency: ~0.8%, Winning rate: ~47%"
        },
        "London System": {
            moves: ["1. d4 Nf6", "2. Nf3 e6", "3. Bf4 d5"],
            summary: "London System’s chill and sturdy, fam! Bishop vibes trending with Gen Z—lit tea! Gukesh’s the king, flexin’ positional rizz. Drop that Bf4 and vibe—bet you’ll yeet this solid setup, no cap! Fun fact: it’s lowkey sauce for days! 🌍 Slay slow, fam! 😎",
            stats: "Frequency: ~3%, Winning rate: ~51%"
        },
        "Reti Opening": {
            moves: ["1. Nf3 d5", "2. c4 e6", "3. g3 Nf6"],
            summary: "Reti’s hypermodern and wavy, fam! Richard Reti cooked it in 1924—sigma rizz! Kramnik slays this sneaky fianchetto vibe, no cap. Flex that flank and yeet the center—bet you’ll glow up big! Fun fact: it’s chill chaos tea forever! 🌀 Stay vibin’, fam! ✨",
            stats: "Frequency: ~2%, Winning rate: ~50%"
        }
    },
    black: {
        "Sicilian Defense": {
            moves: ["1. e4 c5", "2. Nf3 d6", "3. d4 cxd4", "4. Nxd4 Nf6", "5. Nc3 a6"],
            summary: "Sicilian’s straight fire, fam! Been the GOAT defense since forever—peak rizz! Bobby Fischer slayed this aggro chaos, no cap. Flex that counterplay and yeet the c5—bet you’ll slap ‘em silly! Fun fact: it’s wild sauce flipping the script! ⚡ Cook hard, fam! 💪",
            stats: "Frequency: ~30%, Winning rate: ~48%"
        },
        "French Defense": {
            moves: ["1. e4 e6", "2. d4 d5", "3. Nc3 Nf6", "4. e5 Nfd7"],
            summary: "French is tanky and chill, fam! Pawn chain vibes since the 1830s—lit tea! Botvinnik owned this solid sauce, no cap. Flex that e6 and yeet the center—bet you’ll hold it down! Fun fact: it’s French toast rizz all day! 🛡️ Slay slow, fam! 🌟",
            stats: "Frequency: ~12%, Winning rate: ~49%"
        },
        "Caro-Kann Defense": {
            moves: ["1. e4 c6", "2. d4 d5", "3. Nc3 dxe4", "4. Nxe4 Bf5"],
            summary: "Caro-Kann’s sturdy and wavy, fam! Been clutch since the 1880s—pure rizz! Karpov slayed this pawn-lock vibe, no cap. Flex that c6 and yeet the bishop—bet you’ll glow up tight! Fun fact: it’s chill defense tea forever! 🏰 Keep it solid, fam! 😎",
            stats: "Frequency: ~10%, Winning rate: ~50%"
        },
        "King's Indian Defense": {
            moves: ["1. d4 Nf6", "2. c4 g6", "3. Nc3 Bg7", "4. e4 d6"],
            summary: "KID’s wild and aggro, fam! Kingside attack vibes since the 1940s—lit chaos! Kasparov owned this banger, no cap. Flex that g6 and yeet the fianchetto—bet you’ll slap ‘em hard! Fun fact: it’s dynamic tea for days! ⚡ Slay queen energy! 🔥",
            stats: "Frequency: ~8%, Winning rate: ~47%"
        },
        "Nimzo-Indian Defense": {
            moves: ["1. d4 Nf6", "2. c4 e6", "3. Nc3 Bb4", "4. e3 O-O"],
            summary: "Nimzo’s brainy and sigma, fam! Aron Nimzowitsch cooked it in the 1920s—peak rizz! Carlsen slays this pin vibe, no cap. Flex that Bb4 and yeet control—bet you’ll glow up strategic! Fun fact: it’s elite tea owning squares! 🧠 Stay sharp, fam! ✨",
            stats: "Frequency: ~7%, Winning rate: ~51%"
        },
        "Petroff Defense": {
            moves: ["1. e4 e5", "2. Nf3 Nf6", "3. Nxe5 d6", "4. Nf3 Nxe4"],
            summary: "Petroff’s chill and even, fam! Russian vibes since the 1800s—smooth rizz! Kramnik slayed this mirror tea, no cap. Flex that Nf6 and yeet the pawn—bet you’ll keep it balanced! Fun fact: it’s solid sauce for pros! ⚖️ Stay wavy, fam! 😎",
            stats: "Frequency: ~6%, Winning rate: ~49%"
        },
        "Philidor Defense": {
            moves: ["1. e4 e5", "2. Nf3 d6", "3. d4 exd4", "4. Nxd4 Nf6"],
            summary: "Philidor’s old-school and tanky, fam! Been vibin’ since 1749—OG rizz! Nepo slays this center-hold tea, no cap. Flex that d6 and yeet the pawn—bet you’ll lock it down! Fun fact: Philidor was the GOAT back then! 🛡️ Keep it solid, fam! 🌟",
            stats: "Frequency: ~4%, Winning rate: ~48%"
        },
        "Pirc Defense": {
            moves: ["1. e4 d6", "2. d4 Nf6", "3. Nc3 g6", "4. f4 Bg7"],
            summary: "Pirc’s sneaky and wavy, fam! Been flexin’ since the 1930s—lit rizz! Hikaru slays this hypermodern vibe, no cap. Flex that g6 and yeet the fianchetto—bet you’ll slap back hard! Fun fact: it’s chill tea baiting white! 🌀 Go wild, fam! 🔥",
            stats: "Frequency: ~3.5%, Winning rate: ~47%"
        },
        "Scandinavian Defense": {
            moves: ["1. e4 d5", "2. exd5 Qxd5", "3. Nc3 Qa5", "4. d4 Nf6"],
            summary: "Scandi’s bold and snappy, fam! Viking vibes since the 1500s—peak rizz! Ding Liren slays this center-smack tea, no cap. Flex that d5 and yeet the queen—bet you’ll slap ‘em early! Fun fact: it’s wild sauce hitting back! ⚡ Glow up, fam! 😎",
            stats: "Frequency: ~3%, Winning rate: ~48%"
        },
        "Alekhine's Defense": {
            moves: ["1. e4 Nf6", "2. e5 Nd5", "3. d4 d6", "4. Nf3 g6"],
            summary: "Alekhine’s sus and wild, fam! Alekhine dropped it in 1921—sneaky rizz! Caruana slays this bait vibe, no cap. Flex that Nf6 and yeet the knight—bet you’ll trick ‘em silly! Fun fact: it’s chaos tea trolling white! 😈 Stay wavy, fam! 🌈",
            stats: "Frequency: ~2.5%, Winning rate: ~46%"
        },
        "Modern Defense": {
            moves: ["1. e4 g6", "2. d4 Bg7", "3. Nc3 d6", "4. f4 Nf6"],
            summary: "Modern’s chill and flexy, fam! Been wavy since the 1960s—lit rizz! Wesley So slays this sneaky tea, no cap. Flex that g6 and yeet the bishop—bet you’ll glow up later! Fun fact: it’s hypermodern sauce vibin’ hard! 🌀 Keep it lit, fam! ✨",
            stats: "Frequency: ~2%, Winning rate: ~47%"
        },
        "Queen's Gambit Declined": {
            moves: ["1. d4 d5", "2. c4 e6", "3. Nc3 Nf6", "4. Bg5 Be7"],
            summary: "QGD’s solid and classic, fam! Been tea since the 1870s—OG rizz! Anand slays this mirror vibe, no cap. Flex that e6 and yeet the pawn—bet you’ll hold it down tight! Fun fact: it’s chill sauce matching white! 🏰 Stay sturdy, fam! 😎",
            stats: "Frequency: ~5%, Winning rate: ~50%"
        },
        "Grunfeld Defense": {
            moves: ["1. d4 Nf6", "2. c4 g6", "3. Nc3 d5", "4. cxd5 Nxd5"],
            summary: "Grunfeld’s sharp and snappy, fam! Ernst Grunfeld cooked it in 1922—lit rizz! Carlsen slays this center-hit vibe, no cap. Flex that d5 and yeet the knight—bet you’ll slap back hard! Fun fact: it’s wild tea countering white! ⚡ Glow up big, fam! 🔥",
            stats: "Frequency: ~2%, Winning rate: ~49%"
        },
        "Dutch Defense": {
            moves: ["1. d4 f5", "2. c4 Nf6", "3. Nc3 e6", "4. Nf3 d5"],
            summary: "Dutch is aggro and rare, fam! Been Dutch courage since the 1600s—wild rizz! Nakamura slays this f5 vibe, no cap. Flex that pawn and yeet the kingside—bet you’ll cook ‘em silly! Fun fact: it’s spicy tea for days! 🍂 Slay hard, fam! 🌟",
            stats: "Frequency: ~1.5%, Winning rate: ~46%"
        },
        "Nimzowitsch Defense": {
            moves: ["1. e4 Nc6", "2. d4 e5", "3. dxe5 Nxe5", "4. Nf3 Nxf3+"],
            summary: "Nimzowitsch is sus and quirky, fam! Aron Nimzowitsch flexed it in the 1900s—sneaky rizz! Gukesh slays this center-mess vibe, no cap. Flex that Nc6 and yeet the knight—bet you’ll troll ‘em hard! Fun fact: it’s wild tea shaking things up! 😈 Stay lit, fam! 😎",
            stats: "Frequency: ~1%, Winning rate: ~45%"
        }
    }
};