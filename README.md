How to connect frontend(react) to backend(fastapi)
---------------------------------------------

1.  **Clone the Repository**:

    -   First, clone the repository to your local machine using the following command:

        ```
        git clone https://github.com/noteduard33/example-react-fastapi-axios.git
        ```
**BACKEND INSTALATION**

1.  **Create a Virtual Environment**:

    -   Set up a Python virtual environment (venv) by running:

        ```
        python -m venv env
        ```

2.  **Activate the Virtual Environment**:

    -   On Windows:

        ```
        cd env
        cd Scripts
        activate
        cd ..
        cd ..
        ```

    -   On Linux:

        ```
        source env/bin/activate
        ```

3.  **Install Dependencies**:

    -   Install the required Python packages using pip:

        ```
        pip install fastapi
        ```
4.  **Run backend**:

    -   Run backend on localhost:

        ```
        cd backend # if you are not in backend folder
        uvicorn main:app --reload
        ```
**FRONTEND INSTALATION**

1.  **Install Dependencies**:

    -   Install the required Python packages using pip:

        ```
        cd frontend # if you are not in frontend folder
        npm install
        ```
4.  **Run frontend**:

    -   Run frontend on localhost:

        ```
        npm run dev
        ```
11. **Enjoy!** Everything is installed🚀
