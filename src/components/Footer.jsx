import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full py-16 px-20">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">QWERy</h1>
        <div className="flex items-center gap-4">
          <p className="text-sm">Готовы к путешествию?</p>
          <button className="bg-[#FFA337] text-black font-semibold px-5 py-2 rounded-md">
            Начать
          </button>
        </div>
      </div>
      <hr className="border-gray-700 mb-10" />

      <div className="grid grid-cols-5 gap-10 text-sm">
        {/* Newsletter */}
        <div className="col-span-2">
          <h2 className="text-2xl font-semibold leading-tight mb-4">
            Отправьтесь в отпуск,
            <br />
            Сделайте день ярче
          </h2>
          <div className="flex border-b border-gray-700 w-[80%]">
            <input
              type="email"
              placeholder="Адрес электронной почты"
              className="bg-transparent outline-none text-sm py-2 w-full"
            />
            <button className="bg-[#FFA337] text-black px-4 rounded-bl-none rounded-br-md">
              →
            </button>
          </div>
        </div>

        {/* Ссылки */}
        <div>
          <h3 className="text-[#FFA337] font-medium mb-4">Услуги</h3>
          <ul className="space-y-2">
            <li>Email-рассылки</li>
            <li>Кампании</li>
            <li>Брендинг</li>
            <li>Оффлайн</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#FFA337] font-medium mb-4">О нас</h3>
          <ul className="space-y-2">
            <li>Наша история</li>
            <li>Преимущества</li>
            <li>Команда</li>
            <li>Карьера</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#FFA337] font-medium mb-4">Помощь</h3>
          <ul className="space-y-2">
            <li>Частые вопросы</li>
            <li>Связаться с нами</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center mt-16 text-xs text-gray-400">
        <div className="space-x-10">
          <span>Условия использования</span>
          <span>Политика конфиденциальности</span>
        </div>
        <div className="flex gap-4 text-white text-lg">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>

      <p className="text-center text-gray-500 text-sm mt-10">
        © 2021 QWERy. Все права защищены.
      </p>
    </footer>
  );
};

export default Footer;
