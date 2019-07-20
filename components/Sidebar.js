import Link from 'next/link'

export default ({ userRole }) => (
  <div className="aside">
    <ul>
      { userRole === 'Minister' &&
        <>
          <li><Link href="/dashboard/createTask"><a>Создать задачу</a></Link></li>
          <li><Link href="/dashboard/createProject"><a>Создать проект</a></Link></li>
          <li><Link href="/dashboard/createTask"><a>Сформировать отчет</a></Link></li>
        </>
      }

      { userRole === 'Manager' &&
        <>
          <li><Link href="/dashboard/createTask"><a>Создать задачу</a></Link></li>
          <li><Link href="/dashboard/createTask"><a>Сформировать отчет</a></Link></li>
        </>
      }

      { userRole === 'User' &&
        <>
        </>
      }
      
    </ul>
    <style jsx>{`
      .aside {
        position: fixed;
        top: 65px;
        bottom: 0;
        left: 0;
        width: 200px;
        padding: 20px;
        background-color: #ccc;
      }
      ul {
        list-style-type: none;
        padding: 0;
      }
      a {
        display: block;
        padding: 10px 0;
        color: #000;
        text-decoration: none;
      }
      a:hover {
        opacity: .8;
        transition: opacity .2s ease-in;
      }
    `}</style>
  </div>
)