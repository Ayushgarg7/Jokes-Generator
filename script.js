// // const url = "https://www.laughfactory.com/jokes/family-jokes"; // Replace with the URL of the jokes API
// // const url = "http://www.laughfactory.com/jokes/holiday-jokes"; // Replace with the URL of the jokes API
// // const url = "https://herway.net/flirty-jokes-funny-pick-up-lines-and-one-liners/"; // Replace with the URL of the jokes API
// const url = "https://official-joke-api.appspot.com/random_joke";



// async function fetchJokes() {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data.jokes; // Assuming the API response contains an array of jokes
//   } catch (error) {
//     console.error("Failed to fetch jokes:", error);
//     return []; // Return an empty array if there's an error fetching the jokes
//   }
// }

// let flirtingJokes = []; // Initialize the flirting jokes array

// // Fetch jokes and update the flirtingJokes array
// fetchJokes().then((jokes) => {
//   flirtingJokes = jokes;
// });

// function generateFlirtingJoke() {
//   const randomIndex = Math.floor(Math.random() * flirtingJokes.length);
//   const jokeElement = document.getElementById("joke");
//   jokeElement.textContent = flirtingJokes[randomIndex];
// }

// const generateBtn = document.getElementById("generate-btn");
// generateBtn.addEventListener("click", generateFlirtingJoke);

  
const jokes = [
    `A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on." The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now." The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."`,

    `Mr. and Mrs. Brown had two sons. One was named Mind Your Own Business & the other was named Trouble. One day the two boys decided to play hide and seek. Trouble hid while Mind Your Own Business counted to one hundred. Mind Your Own Business began looking for his brother behind garbage cans and bushes. Then he started looking in and under cars until a police man approached him and asked, "What are you doing?" "Playing a game," the boy replied. "What is your name?" the officer questioned. "Mind Your Own Business." Furious the policeman inquired, "Are you looking for trouble?!" The boy replied, "Why, yes."`,

    `A 3 years old boy sits near a pregnant woman. Boy: Why do you look so fat? Pregnant woman: I have a baby inside me. Boy: Is it a good baby? Pregnant woman: Yes, it is a very good baby. Boy: Then why did you eat it?!`,

    `लड़का – हेलो पम्मी डार्लिंग, क्या कर रही हो ?😍

    लड़की – कौन ?
    
    लड़का – अरे, मैं हुँ, तेरा जान, पम्मी डार्लिंग…😍
    
    लड़की – तू बंटी है न ?😳
    
    लड़का – हा…😵
    
    लड़की – तू बंशीलाल का बेटा और रामलाल का पोता है न ?
    
    लड़का – हां, पर तुम कौन बोल रही हो ?🤔
    
    लड़की – हरामखौर मैं तेरी माँ बोल रही हुँ…🤬😡
    
    तुने पम्मी को नहीं… मम्मी को फोन लगाया है…😫
    
    नालायाक, 😠 तू घर आ अब…😂😂😂😂`,

    `गर्लफ्रेन्ड ने रोक दिया और कहा – “नहीं, नहीं, ये सब शादी के पहले नहीं…”

    जोश में होश खोकर सांता तुरंत बोला –
    
    “ओये सोणिये, मैं शादीशुदा ही हुँ,
    तू टेंशन ना ले…”
    
    Eng text:
    
    Santa uski girlfriend ko kiss karne hi wala tha ki,
    
    Girlfriend ne rok diya Aur kaha – “Nahi, Nahi, ye sab Shadi ke pahele nahi…”
    
    Josh me hosh khokiar santa turant bola –
    
    “Oye Soniye, Mein shadisuda hi hu,
    Tu Tension na le…”`,

    `एक अच्छा दोस्त जिंदगी को जन्नत बना देता है ।

    इसलिये कहता हूँ कमीनों
    
    कदर किया करों मेरी,
    
    वर्ना जगह-जगह कहते फिरोगे –
    
    “बहती हवा-सा था वाे….
    
    यार हमारा था वाे…
    
    कहाँ गया उसे ढूँढों…”`,

    `💪स्वस्थ रहने का अचूक उपाय✊

    जरूर आजमाये👇👇👇
    
    2 ग्लास दुध🍼 ले,
    उसे इतना उबाले🔥 कि,
    वह 1 ग्लास 🥛रहे जाये
    
    फिर 10-10 काजू-बादाम पीस कर उसमें मिक्ष कीजिए ।😋
    
    उसमें थोड़ा देशी घी और
    स्वाद अनुसार थोड़ी-सी शक्कर भी डालें 👌
    
    अब याद रहे,☝️
    जब सारा मिश्रण तैयार हो जाये तो
    
    .
    
    मुझे फोन📱 कर के बुला ले…💁‍♂️
    मैं वो सारा दूध🥛 पी लूँगा,
    और आपके लिये भगवान से
    अच्छे स्वास्थ के लिये प्रार्थना करूँगा ।🙏
    😝😝
    मेरा नंबर व्हॉट्सऐप वाला ही है ।
    🤪🤣🤣`,

    `Ladki (Attitude mein) : Tu kya jane mere husn ke charche,

    Meri to har ek sans pe college ke ladke marte hai.
    
    .
    
    Ladka : Ha, Mein samaj gya.
    
    To tum koi achcha sa Toothpaste istemal kyo nahi karti…`,

    `सबसे सॉलिड बेइज्जती तो तब हो जाती है,

    जब Office की सबसे सुंदर लड़की घर आये,
    
    और माँ उससे कहें कि,
    
    “बैठो बेटी,
    
    .
    
    .
    
    .
    
    रमेश तो संडास करने गया है…
    
    बस, अभी आता ही होगी…”
    
    `,

    `एक लड़की फोन पर बात करते हुए

    मेरी तरफ आकर अपने सहेली से बोली –
    
    “चल अब फोन रखती हूँ एक Handsome लड़का आया है,
    
    देखती हूँ अगर कोई बात बनती है तो
    
    Bye… See You…”
    
    मैं कुछ बोलु उससे पहले ही वो बोली –
    
    “Sorry Uncle, मेरी सहेली बहुत बाते करती है,
    
    मुझे फोन रखना था इसलिये झूठ बोलना पड़ा…”
    
    भगवान कसम,
    
    आज तक इतनी ईज्जत से किसी ने बेईज्जत नहीं किया…`,

    `लड़की – तुम्हारा मोबाईल तो बहोत-ही अच्छा है ।

    15-20 हजार का तो होगा ही न ।
    
    वैसे कितने का है ये ?
    
    लड़का – अरे नहीं ! मैंने तो इसे रेस में जीता है ।
    
    लड़की – वाओ… वैसे कितने लोग थे रेस में ?
    
    लड़का – अरे ज्यादा नहीं रे,
    
    एक मोबाईल शॉप का मालिक, 2 पुलिस वाले और एक मैं…`,

    `Girl (Doctor se) Muje bahot Nind aati hai, Pure din raat Sote hi Raheti hu…

    Doctor: Konsa phone Istemal karti ho?
    
    Girl: Vahi, Nokia ka purana wala.
    
    Doctor: 1 Smartphone likhkar de rha hu, Oppo, Vivo ya Redmi Company ka le lo…
    
    Aur usme Jio ka Simcard Thuskar Facebook, WhatsApp Install kar lena….
    
    Aaram Ho jayega…`,

    `लड़का : Hello !

    लड़की – …
    
    लड़का : बात तो करो !!!
    
    लड़की – ….
    
    लड़का : क्या हुआ है ???
    
    ल़ड़की – मैं गुस्सा हूँ तुमसे…
    
    लड़का : ओह ! मुझे लगा मुँह में गुटखा है तेरे…`,

    `शराबी – अगर मेरे हाथ ☝️ में सरकार होती तो,

    मैं देश की तकदीर 😇 बदल देता ।
    
    शराबी की पत्नी (गुस्से से)😡 – अरे, पहले अपना पजामा तो बदल ले करम जले…🤬🤬
    
    सुबह से मेरी सलवार पहन कर घूम रहा है…😧😝😜🤪🤪`,

    `पति अपनी पत्नी को हिडेन फोल्डर को कैसे देखते है वो फोन पर उसे सिखा रहा था ।

    पति – माय कोम्प्युटर पर क्लिक कर
    
    पत्नी – हा किया
    
    पति – अब डी ड्राईव पे क्लिक कर
    
    पत्नी – हा किया
    
    पति – अब देख उपर क्या दिख रहा है ?
    
    पत्नी – पंखा
    
    पति – लटक जा गंवार कही की…`,

    `लड़का – मम्मी “लव मैरिज” करने से घरवाले नाराज होते हैं क्या ?

    मम्मी – तू जरूर किसी चूडैल के चक्कर में होगा । और यह सब तुझे उसी डायन ने कहा होगा ।
    
    लड़किया तो बस लड़के को फँसाने में ही लगी रहती है,
    
    जहाँ अच्छा लड़का देखा नहीं, कि शुरु हो गयी,
    
    बेटा तू इनसे बच के रहना । ये बहुत मक्कार और कमीनी होती है ।
    
    और इनका तो खानदान भी….
    
    लड़का – बस मम्मी बस… ऐसा कुछ नहीं है…
    
    वो तो पापा बता रहे थे, कि आप दोनों की “लव मैरिज” हुई थी`,

    `पत्नी – हर सफल आदमी 👨 के पीछे एक औरत👩 होती है ।

    पति – और अगर एक से ज्यादा औरते हुई तो ?💁‍♂️
    
    खतरनाक जवाब…😱
    
    पत्नी – तो बाद में उस सफल एवं महान आदमी की कहानी
    
    “सावधान इंडिया” 😥 में दिखाते है ।😜😝😂`,
    `पति ने पत्नी का हालचाल जानने के लिये व्हॉट्सएप पे टाईप किया –

    कैसा है सिरदर्द ?🙄
    
    पर गलती से टाईप हो गया –
    
    कैसी हो सिरदर्द ?😲
    
    पति महोदय का ऑफिस छूटे
    
    4 ⏰ घंटे हो गये, पर घर नहीं जा रहे है ।😜😜😝😝😂😂`,

    // "Why don't scientists trust atoms? Because they make up everything!",
    // "What did one wall say to the other wall? I'll meet you at the corner!",
    // "Why don't skeletons fight each other? They don't have the guts!",

    // Add more jokes here
  ];
  
  function generateFlirtingJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const jokeElement = document.getElementById("joke");
    jokeElement.textContent = jokes[randomIndex];
  }
  
  const generateBtn = document.getElementById("generate-btn");
  generateBtn.addEventListener("click", generateFlirtingJoke);
  