import { textData } from "../data/textData";

const Text = () => {
  return (
    <section id="textType" className="section">
      <span>텍스트 유형</span>

      <h2>다채로운 베이커리 컬렉션</h2>

      <div className="text_inner container">
        {textData.map((item) => (
          <div className={`text ${item.className}`} key={item.id}>
            <h3 className="text_title">{item.title}</h3>

            <p className="text_desc">{item.desc}</p>

            <a href="#" className="text_btn">
              더보기
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Text;
