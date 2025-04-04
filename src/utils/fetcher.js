/* eslint-disable no-undef */
/**
 * API utility functions
 */
export const useApi = () => {
  const API = {
    /**
     * Execute a query
     * @param {string} endpoint
     * @param {string} method
     * @param {string|null|object} data
     * @param {string} token
     * @returns {Promise}
     */
    execute: async (endpoint, method = "GET", data = null, token = null) => {
      const headers = {
        Authorization: token ? `Bearer ${token}` : "",
        Accept: "application/json",
      };

      // Only add Content-Type for non-FormData requests
      if (!(data instanceof FormData)) {
        headers["Content-Type"] = "application/json";
      }

      const apiUrl = `${import.meta.env.VITE_BASE_URL}${endpoint}`;

      // fetch options
      const fetchOptions = {
        method,
        headers,
      };

      // Only add body for non-GET requests
      if (method !== "GET" && data) {
        fetchOptions.body =
          data instanceof FormData ? data : JSON.stringify(data);
      }

      try {
        const res = await fetch(apiUrl, fetchOptions);
        return Promise.all([res.status, res.json(), res.ok]);
      } catch (error) {
        console.error("Fetch error:", error);
        return Promise.resolve([null, null, false, null]);
      }
    }, //execute

    /**
     * Process the response after the query has been executed
     * @param {Array} res
     * @returns {object}
     */
    processResponse: (res) => {
      if (!res[2]) {
        if (res[0] == 401) {
          alert("Authentication error : " + res[1].message);
        }
        throw new Error(res[1].message);
      }
      return res[1];
    },

    /**
     * API request for Tutor and learner registration
     * @param {object} data - Tutor registration data including name, email, password, and profile picture
     * @returns {Promise} Promise with registration response
     */
    registerUser: async (data) => {
      const res = await API.execute("/signup", "POST", data);
      return API.processResponse(res);
    },

    /**
     * API request to for Admin login
     * @param {object} data
     * @returns {Promise}
     */
    loginUser: async (data) => {
      const res = await API.execute("/login", "POST", data);
      return res;
    },

    /**
     * API request for logout operation
     * @param {string} token
     * @returns {Promise}
     */
    logout: async (token) => {
      const res = await API.execute("/logout", "POST", null, token);
      return res;
    },

    /**
     * API request to fetch all products
     * @param {number} nextPage
     * @returns {Promise} Promise with all products data
     */
    getLearnerGigs: async (id) => {
      const res = await API.execute(`/gigs?learner_id=${id}`, "GET", null);
      return API.processResponse(res);
    },
    getAllGigs: async () => {
      const res = await API.execute(`/gigs`, "GET");
      return API.processResponse(res);
    },

    getGigDetails: async (gig_id = null) => {
      const res = await API.execute(`/gigs?gig_id=${gig_id}`, "GET", null);
      return API.processResponse(res);
    },

    updateGig: async () => {
      const res = await API.execute("/gigs", "POST", data, token);
      return API.processResponse(res);
    },

    /**
     * API request to fetch all categories
     * @returns {Promise} Promise with all categories data
     */
    // getAllCategories: async () => {
    //   const res = await API.execute("/categories", "GET", null);
    //   return API.processResponse(res);
    // },

    createGig: async (token, data) => {
      const res = await API.execute("/gigs", "POST", data, token);
      return API.processResponse(res);
    },

    DeleteGig: async () => {
      const res = await API.execute(`/gigs?gig_id=${gig_id}`, "GET", token);
      return API.processResponse(res);
    },

    getAllCategories: async () => {
      const res = await API.execute("/categories", "GET");
      return API.processResponse(res);
    },

    getAllTutors: async () => {
      const res = await API.execute(`/tutors`, "GET");
      return API.processResponse(res);
    },

    getTutorDetails: async (id) => {
      const res = await API.execute(`/tutors?tutor_id${id}`, "GET", token);
      return API.processResponse(res);
    },

    /**
     * API request to publish a gig
     * @param {number} gig_id - ID of the gig to publish
     * @param {string} token - Authentication token
     * @returns {Promise} Promise with publish response
     */
    PublishGig: async (gig_id, token) => {
      // Fixed URL structure according to API docs
      const res = await API.execute(
        `/gigs/${gig_id}/publish`,
        "PATCH",
        null,
        token
      );
      return API.processResponse(res);
    },

    /**
     * API request to unpublish a gig
     * @param {number} gig_id - ID of the gig to unpublish
     * @param {string} token - Authentication token
     * @returns {Promise} Promise with unpublish response
     */
    UnpublishGig: async (gig_id, token) => {
      // Fixed URL structure according to API docs
      const res = await API.execute(
        `/gigs/${gig_id}/unpublish`,
        "PATCH",
        null,
        token
      );
      return API.processResponse(res);
    },
  };

  return { API };
};
