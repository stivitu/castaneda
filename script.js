


   const array1 = [
    "A warrior doesn't need personal history. One day, he finds it is no longer necessary for him, and he drops it.",
    "The world is unfathomable. And so are we, and so is every being that exists in this world.",
    "A warrior thinks of his death when things become unclear. And death says: 'It is all right, I did not touch you yet.' The idea of death is the only thing that tempers our spirit.",
    "Warriors have an ulterior purpose for their acts, which has nothing to do with personal gain. The average man acts only if there is the chance for profit. Warriors act not for profit, but for the spirit.",
    "The spirit manifests itself to a warrior at every turn. However, this is not the entire truth. The entire truth is that the spirit reveals itself to everyone with the same intensity and consistency, but only warriors are consistently attuned to such revelations.",
    "A warrior must cultivate the feeling that he has everything needed for the extravagant journey that is his life. What counts for a warrior is being alive. Life in itself is sufficient, self-explanatory and complete.",
    "Warriors do not win victories by beating their heads against walls, but by overtaking the walls. Warriors jump over walls; they don't demolish them.",
    "To change our idea of the world is the crux of shamanism. And stopping the internal dialogue is the only way to accomplish it.",
    "Shamanism is a journey of return. A warrior returns victorious to the spirit, having descended into hell. And from hell he brings trophies. Understanding is one of his trophies.",
    "Whenever the internal dialogue stops, the world collapses, and extraordinary facets of ourselves surface, as though they had been kept heavily guarded by our words.",
    "Knowledge is a most peculiar affair, especially for a warrior. Knowledge for a warrior is something that comes at once, engulfs him, and passes on.",
    "A warrior considers himself already dead, so there is nothing for him to lose. The worst has already happened to him, therefore he's clear and calm; judging him by his acts or by his words, one would never suspect that he has witnessed everything.",
    "When a warrior learns to stop the internal dialogue, everything becomes possible; the most far-fetched schemes become attainable.",
    "If a warrior is to succeed in anything, the success must come gently, with a great deal of effort but with no stress or obsession.",
    "The only possible course that a warrior has is to act consistently and without reservations. At a certain moment, he knows enough of the warriors' way to act accordingly, but his old habits and routines may stand in his way.",
    "There are lots of things a warrior can do at a certain time which he couldn't do years before. Those things themselves did not change; what changed was his idea of himself.",
    "A warrior doesn't know remorse for anything he has done, because to isolate one's acts as being mean, or ugly, or evil is to place an unwarranted importance on the self.",
    "A warrior acts as if he knows what he is doing, when in effect he knows nothing.",
    "A warrior must learn to make every act count, since he is going to be here in this world for only a short while, in fact, too short for witnessing all the marvels of it.",
    "A warrior-hunter deals intimately with his world, and yet he is inaccessible to that same world. He taps it lightly, stays for as long as he needs to, and then swiftly moves away, leaving hardly a mark.",
    "A warrior must learn to be available and unavailable at the precise turn of the read. It is useless for a warrior to be unwittingly available at all times, as it is useless for him to hide when everybody knows that he is hiding.",
    "Whenever a warrior decides to do something he must go all the way, but he must take responsibility for what he does. No matter what he does, he must know first why he is doing it, and then he must proceed with his actions without having doubts or remorse about them.",
    "As long as man feels that he is the most important thing in the world, he cannot really appreciate the world around him. He is like a horse with blinders; all he sees is himself, apart from everything else.",
    "A warrior takes responsibility for his acts, for the most trivial of his acts. An average man acts out his thoughts, and never takes responsibility for what he does.",
    "An average man is too concerned with liking people or with being liked himself. A warrior likes, that's all. He likes whatever or whomever he wants for the hell of it.",
    "There's no emptiness in the life of a warrior. Everything is filled to the brim. Everything is filled to the brim, and everything is equal.",
    "A warrior chooses a path with heart, any path with heart, and follows it; and then he rejoices and laughs. He knows because he 'sees' that his life will be over altogether too soon. He 'sees' that nothing is more important that anything else.",
    "A warrior lives by acting, not by thinking about acting, nor by thinking about what he will think when he has finished acting.",
    "The most effective way to live is as a warrior. A warrior may worry and think before making any decision, but once he makes it, he goes on his way, free from worries or thoughts; there will be a million other decisions still awaiting him. ",
    "A warrior knows that he is only a man. His only regret is that his life is so short that he can't grab onto all the things that he would like to. But for him, this is not an issue; it's only a pity. ",
    "Feeling important makes one heavy, clumsy and vain. To be a warrior one needs to be light and fluid.",
    "A man has four natural enemies: fear, clarity, power, and old age. Fear, clarity and power can be overcome, but not old age. Its effect can be postponed, but it can never be overcome.",
    "All paths are the same: they lead nowhere. However, a path without a heart is never enjoyable. On the other hand, a path with heart is easy - it does not make a warrior work at liking it; it makes for a joyful journey;  as long as a man follows it, he is one with it.",
    "There is a question that a warrior has to ask, mandatorily: Does this path have a heart?",
    "To be angry at people means that one considers their acts to be important. It is imperative to cease to feel that way. The acts of men cannot be important enough to offset our only viable alternative: our unchangeable encounter with infinity.",
    "Nothing in this world is a gift. Whatever has to be learned must be learned the hard way.",
    "Power rests on the kind of knowledge that one holds. What is the sense of knowing things that are useless? They will not prepare us for our unavoidable encounter with the unknown.",
    "The things that people do cannot under any conditions be more important than the world. And thus a warrior treats the world as an endless mystery and what people do as an endless folly.",
    "Dwelling upon the self too much produces a terrible fatigue. A man in that position is deaf and blind to everything else. The fatigue makes him cease to see the marvels all around him."
     ]
    //array 39 članova
function myFunction1() {
 let randomNumber1 = Math.floor(Math.random() * 39);
 let randomTip1 = array1[randomNumber1];
 document.getElementById("engleski").innerText= randomTip1;
 }
myFunction1();
