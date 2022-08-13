export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }

    load(){
        this.entries = [
            {
                login: 'lhenriquesf',
                name: 'Luiz Henrique',
                public_repos: '10',
                followers: '120'
            },

            {
                login: 'JulianaLunguinho',
                name: 'Juliana Lunguinho',
                public_repos: '23',
                followers: '1200'
            }
        ]
    }
}


export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.update()
    }

    update(){
        this.removeAllTr()

        this.entries.forEach((user)=>{
            const row = this.creatRow()
            
            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
        })
    }

    creatRow(){
        const tr = document.createElement('tr')

        tr.innerHTML = `
        <tr>
        <td class="user">
            <img src="https://github.com/alexxcamargo1000.png" alt="">
            <a href="https://github.com/alexxcamargo1000" target="_blank">
                <p>Alex Camargo</p>
                <span>alexxcamargo1000</span>
            </a>
        </td>
        <td class="followers">
            2
        </td>
        <td class="repositories">
            12
        </td>
        <td>
            <button class="remove" >&times;</button>
        </td>
    </tr>
        `
        return tr
    }

    removeAllTr(){
        const tbody = this.root.querySelector('table tbody')

        tbody.querySelectorAll('tr').forEach((tr)=>{
            tr.remove()
        });
    }
}
