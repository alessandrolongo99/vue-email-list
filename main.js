const app = new Vue({
    el: '#root',
    data: {
        mails: [],
        generationDone: false,
    },
    created() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    const result = response.data.response;
                    this.mails.push(result);
                })
        }
        this.generationDone = true;
    }
});