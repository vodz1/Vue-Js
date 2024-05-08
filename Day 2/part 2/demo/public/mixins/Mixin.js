import axios from 'axios'
export default {
  methods: {
    async GetprdById(id) {
      try {
        const response = await axios.get(`http://localhost:2000/recipes/${id}`);
        return response.data;
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  }
};
