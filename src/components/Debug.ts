interface Visualizer {
    [key: string]: string;
}

export class Debug {
    static screen: HTMLDivElement;
    static template: string;
    static visualizers: Visualizer;

    static init() {
        this.visualizers = {};
        this.screen = document.querySelector("#debug") as HTMLDivElement;
        this.screen.style.display = "flex";
    }

    static table() {
        return `
        <table>
            <thead>
                <tr>
                    <th>Property</th>
                    <th>Value</th>
                </tr>
            </thead>
            ${this.body()}
        </table>
        `;
    }

    static body() {
        return `
        <tbody>
            ${
                this.visualizers
                    ? Object.entries(this.visualizers)
                          .map((visualizer) => {
                              return `
                    <tr>
                        <td>${visualizer[0]}</td>
                        <td>${visualizer[1]}</td>
                    </tr>
                    `;
                          })
                          .join("")
                    : ""
            }
        </tbody>
        `;
    }

    static watch(property: string, value: string | number) {
        const isNumber = typeof value === "number";
        this.visualizers[property] = isNumber ? value.toFixed(2) : value;
        this.template = this.table();
    }

    static draw() {
        this.template = this.table();
        this.screen.innerHTML = this.template;
    }
}
