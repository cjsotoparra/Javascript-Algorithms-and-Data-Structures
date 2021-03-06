class HashTable {

  	constructor(size){
    		this.data = new Array(size);
  	}

  	_hash(key) {
    		let hash = 0;
    		for (let i =0; i < key.length; i++){
        		hash = (hash + key.charCodeAt(i) * i) % this.data.length
    		}
    		return hash;
  	}

	set(key, value){

		let i = this._hash(key);

		if(!this.data[i]){
			this.data[i] = [];
		}

		this.data[i].push([key, value]);
	}

	get(key){
		let i = this._hash(key);
		const currentBucket = this.data[i];
		if(currentBucket){
			for(let i = 0; i<currentBucket.length; i++){

				if(currentBucket[i][0] === key){
					return currentBucket[i][1];
				}
			}
		}
		return undefined;
	}

	keys() {
		const currentKeys = [];
		for(let i = 0; i < this.data.length; i++){
			if(this.data[i]){
				currentKeys.push(this.data[i][0][0]);
			}
		}

		return currentKeys;
		}

	contains(key){

		if(this.get(key)){
			return true;
		}

		return false;
	}
}

module.exports = HashTable;
