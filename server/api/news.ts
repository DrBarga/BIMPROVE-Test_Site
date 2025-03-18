interface NewsItem {
  id: number
  title: string
  picture: string
  text: string
  publicationDate: string
  category: string
}

const news: NewsItem[] = [
  {
    id: 1,
    title: "Новые технологии в BIM-моделировании",
    picture: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=60",
    text: "Современные технологии BIM-моделирования позволяют создавать более точные и детальные модели зданий. Мы рассказываем о последних инновациях в этой области и их влиянии на строительную отрасль.",
    publicationDate: "2024-03-20",
    category: "Технологии"
  },
  {
    id: 2,
    title: "Успешное завершение проекта MEP координации",
    picture: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60",
    text: "Наша команда успешно завершила координацию MEP систем для крупного коммерческого проекта. В процессе было выявлено и устранено более 200 коллизий, что позволило сэкономить значительные средства на этапе строительства.",
    publicationDate: "2024-03-18",
    category: "Проекты"
  },
  {
    id: 3,
    title: "Создание параметрических семейств Revit",
    picture: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=60",
    text: "Мы разработали новую библиотеку параметрических семейств Revit для инженерного оборудования. Эти компоненты значительно ускоряют процесс проектирования и обеспечивают высокую точность моделирования.",
    publicationDate: "2024-03-15",
    category: "Разработка"
  },
  {
    id: 4,
    title: "Лазерное сканирование в BIM",
    picture: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format&fit=crop&q=60",
    text: "Наша компания внедрила новое оборудование для лазерного сканирования, которое позволяет создавать более точные облака точек и, как следствие, более качественные BIM-модели существующих зданий.",
    publicationDate: "2024-03-12",
    category: "Технологии"
  },
  {
    id: 5,
    title: "Координация инженерных систем",
    picture: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=60",
    text: "Мы представили новый подход к координации инженерных систем, который позволяет сократить время на выявление коллизий на 40% и повысить точность моделирования.",
    publicationDate: "2024-03-10",
    category: "Методология"
  },
  {
    id: 6,
    title: "Интеграция BIM с IoT",
    picture: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=60",
    text: "Мы начали внедрять технологии интернета вещей в наши BIM-модели. Это позволяет отслеживать состояние зданий в реальном времени и оптимизировать их эксплуатацию.",
    publicationDate: "2024-03-08",
    category: "Инновации"
  }
]

export default defineEventHandler((event) => {
  const query = getQuery(event)
  const id = query.id

  if (id) {
    const newsItem = news.find(item => item.id === Number(id))
    if (!newsItem) {
      throw createError({
        statusCode: 404,
        message: 'News item not found'
      })
    }
    return newsItem
  }

  return news
}) 