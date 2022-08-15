import { GithubUser } from "./gitHubUser.js"

class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)

        this.tbody = this.root.querySelector('table tbody')

        this.load()

        // GithubUser.search('JulianaLunguinho').then(user => console.log(user))
    }

    load(){
        this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
    }

    save(){
        localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
    }

    async add(username) {
        try {

            const userExists = this.entries.find(entry => entry.login === username)

            if(userExists){
                throw new Error('User ready exists')
            }

            const user = await GithubUser.search(username)

            if(user.login === undefined){
                throw new Error('User not found!')
            }

            this.entries = [user, ...this.entries]
            this.update()
            this.save()

        } catch(error) {
            alert(error.message)
        }
    }

    delete(user){
        const filterEntries = this.entries.filter((entry)=>
            entry.login !== user.login
        )

        this.entries = filterEntries
        this.update()
        this.save()
    }
}


export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.update()
        this.onadd()
    }

    onadd(){
        const addButton = this.root.querySelector('.search button')
        addButton.onclick = ()=>{
            const { value } = this.root.querySelector('.search input')

            this.add(value)
        }
    }

    update(){
        this.removeAllTr()

        this.entries.forEach((user)=>{
            const row = this.creatRow()
            
            row.querySelector('.user img').src = `https://github.com/${user.login}.png`

            row.querySelector('.user a').href = `https://github.com/${user.login}`

            row.querySelector('.user p').textContent = user.name

            row.querySelector('.user span').textContent = user.login

            row.querySelector('.followers').textContent = user.followers

            row.querySelector('.repositories').textContent = user.public_repos

            row.querySelector('.remove').onclick = ()=>{

                const isOk = confirm('Tem certeza que deseja deletar essa linha?')

                if (isOk){
                    this.delete(user)
                }
            }

            this.tbody.append(row)
        })
    }

    creatRow(){
        const tr = document.createElement('tr')

        tr.innerHTML = ` 
    <tr>
        <td class="user">
            <img src="https://github.com/lhenriquesf.png" alt="">
            <a href="https://github.com/lhenriquesf" target="_blank">
                <p>Luiz Henrique</p>
                <span>lhenriquesf</span>
            </a>
        </td>
        <td class="repositories">
            2
        </td>
        <td class="followers">
            12
        </td>
        <td>
            <button class="remove" >Remove</button>
        </td>
    </tr>
    `

        return tr
    }


    removeAllTr(){
        this.tbody.querySelectorAll('tr').forEach((tr) => {
            tr.remove()
        });
    }
}
