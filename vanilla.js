    const ul = document.getElementById('ul');
    const addBtn = document.getElementById('addBtn');
    const submitBtn = document.getElementById('submitBtn');
    const removeBtn = document.querySelectorAll('.removeBtn');
    let itemCount = 1;

    addBtn.addEventListener("click", add)
    submitBtn.addEventListener("click", submitData);
    // 기본 form에서만 적용 하면 된다.
    removeBtn[0].addEventListener("click", (e) => remove(0));

    // 프리이벤트 디폴트 = 여기서 실행하는 이벤트가 많을때 프리이벤트 디폴트를 만나면 이후 디폴트로 움직이는 이벤트를 멈춰라
    // 스탑프로페게이션 = 겹쳐있는 이벤트가 있을때 부모객체의 이벤트를 발생시키지 않음.
    // 거의 대부분 두개를 같이 사용하고, 따로 사용하는 경우가 많지 않다. 현재는 프리이벤트 디폴트를 사용
    function remove(e) {
        e.preventDefault()
        // e.stopPropagation()
        //event가 발생한 항목(btn > form) 자체를 삭제
        console.log(e.target);
        e.target.closest('form').remove();
    }

    function submitData() {
        console.log('submit!!!!!!~!')
        const results = [];
        // 이름 input을 기준으로 갯수를 찾자.
        const forms = document.querySelectorAll('#ul form');
        // 갯수 : names.length
        forms.forEach(f => {
            results.push({name:f.name.value, sex: f.sex.value});
        });
    };

    function add() {
        const li = document.createElement("li")
        const itemStr = '' +
            `<li className="flex gap-8">` +
            `    <label>` +
            `        이름 : <input type="text" name="name" class="border border-gray-600 rounded">` +
            `    </label>` +
            `    <div>` +
            `        <label>여 <input type="radio" name="sex" value="F"></label>` +
            `        <label>남 <input type="radio" name="sex" value="M"></label>` +
            `    </div>` +
            `    <button className="removeBtn w-32 p-2 bg-gray-200 text-sm hover:bg-gray-300 rounded shadow">Remove</button>` +
            `</li>`;

        li.innerHTML = itemStr;
        const removeBtn = li.querySelector('button')
        const myIdx = itemCount
        removeBtn.addEventListener("click", (e) => remove);
        ul.appendChild(li);
        ++itemCount;
    }
