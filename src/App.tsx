import { Header } from './components/Header'
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'



const posts: PostType[] = [
	{
		id: 1,
		author: {
			avatarUrl: 'https://github.com/davisouzak.png',
			name: 'Álvaro Davi',
			role: 'Trainee TITAN',
		},
		content: [
			{ type: 'paragraph', content: 'Fala galeraa 👋' },
			{
				type: 'paragraph',
				content:
					'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
			},
			{ type: 'link', content: '👉jane.design/doctorcare' },
		],
		publishedAt: new Date('2024-07-31 22:00:00'),
	},
	{
		id: 2,
		author: {
			avatarUrl: 'https://github.com/daviprios.png',
			name: 'Davi Rios',
			role: 'Desenvolvedor Full-Stack',
		},
		content: [
			{ type: 'paragraph', content: 'Fala galeraa 👋' },
			{
				type: 'paragraph',
				content:
					'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
			},
			{ type: 'link', content: '👉jane.design/doctorcare' },
		],
		publishedAt: new Date('2024-07-27 22:00:00'),
	},
]

export function App() {
	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map((post) => {
						return (
							<Post
								post={post}
								key={post.id}
							/>
						)
					})}
				</main>
			</div>
		</div>
	)
}
