import React from "react";
import "./translate.css";

const Translate = () => {
  return (
    <div id="translate" className="translate-container">
      {/* <textarea className='input-text' placeholder='Enter text to translate...'></textarea>
      <button className='translate-button'>Translate</button> */}
      <div className="translate_head">
        <h2>Translated Text</h2>
      </div>
      <table>
        <tr>
          <th>Bundeli</th>
          <th>Hindi</th>
        </tr>

        <tr>
          <td>
            हम जो बाद मे कर है | साचि बताओ मालक कैसो गओ तुमाओ दिना | इते आओ{" "}
          </td>
          <td>मैं ये बाद मे करुंगा | मुझे सच बताओ | कैसा रहा दिन | यहाँ आओ </td>
        </tr>

        <tr>
          <td>
            हम तुम्हे काये लये | तुम खुद्को पांच साले बाद कहा देखत | तुम हम्से
            का चाहत | जो सहि रेह्त है हमोरे बोइ करत है | हमोरे जो कचु केह्त है
          </td>
          <td>
            मैं आप को क्यु चुनु | पांच साल बाद आप स्वयं को कहां देखते हैं | आप
            मुझसे क्या चाहते हैं |हम वही करते हैं जो सही है |
          </td>
        </tr>

        <tr>
          <td>
            वो करत सोइ है | तुम हमोरो कि कम्पिनि मे काम कये कर्वो चाहत | हमोरो
            को तुमाइ मदद चाने | हम अंदर आ जाबे का
          </td>
          <td>
            हम जो कहते हैं वो करते हैं | आप हमारी कंपनी में काम क्यों करना चाहते
            हैं | हमे आपकी मदद की जरूरत है | क्या मैं अंदर आ सकता हूँ |
          </td>
        </tr>

        <tr>
          <td>
            हमने तो खा लओ खाना | बा खाना खा लेहे | बो चलो जेहे | रेन दो हो गओ |
            तुमाओ का नाम | कये तुम का कर रहे ते |
          </td>
          <td>
            मैंने खाना खा लिया है | वह खाना खा लेगी | वह चला जायेगा | जाने दो हो
            गया | तुम्हारा नाम क्या है | तुम क्या कर रहे थे |
          </td>
        </tr>

        <tr>
          <td>
            हम तुमाये संगे जाबे तैजार है | तुम हमे चाहत हो के नहि | हम तुम्हे
            नहि चाहत | उ बक्सा को उठा लेओ | तुमने खाना खा लओ | कैसे हो तुम
          </td>
          <td>
            मै तुम्हारे साथ चलने के लिए तैयार हूं | क्या तुम मुझसे प्यार करती हो
            | मै तुमसे प्यार नहीं करती हूं | उस बॉक्स को उठा लोगे | तुम खाना खा
            लिए | कैसे हो आप
          </td>
        </tr>

        <tr>
          <td>
            अब का कर्बि | भूख लग रहि है | कैसे बोलत | का कर हो | बिछु | बिलैज़्ज़ा
            | बुरो समय सब को आत है कोनऊ बगर जात कोनऊ बन जात | सुदरो कोनऊ नहि
            रेह्त बस कोनऊ कोनऊ के करम बस पता नहि रेह्त
          </td>
          <td>
            अब क्या करूं | भूख लगी है | कैसी बातें करते हो | क्या करोगे | बिच्छू
            | बिल्ली | बुरा वक्त सब का आता है काेई बिखर जाता है ताे काेई निखर
            जाता है | बेक़सूर कौन होता हैं इस ज़माने में बस सबके गुनाह पता नहीं
            चलते
          </td>
        </tr>

        <tr>
          <td>
            हम का कर सकत | बो का के रहो | जाओ मालक सपर लो | तुम कहा सो गये यार |
            बे काये के पैसे दे दये | तुम काये चला रहे गाड़ी |
          </td>
          <td>
            मै क्या कर सकता हूं | वह क्या पूछ रहा है | जाओ नहा लो यार | तुम कहा
            सो गए | वह किसका पैसा दिया है | तुम गाड़ी क्यू चलायोगे|
          </td>
        </tr>
 
      </table>
    </div>
  );
};

export default Translate;