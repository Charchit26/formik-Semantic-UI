# formik-Semantic-UI

I found that the very popular `Formik` (https://jaredpalmer.com/formik) library used to build and manage forms in React, is not compatible with Semantic UI (https://react.semantic-ui.com/).

Taking cue from mvanlonden's answer at https://github.com/jaredpalmer/formik/issues/148 regarding the same, I modified this wrapper component to properly use Formik along Semantic components.

An example is also being worked on with associated tests using Enzyme and Jest

If you're just starting with Formik, their documentation is quite informative. 
Also, this article proved to be quite helpful for me -> https://medium.com/@rossbulat/formik-for-react-introduction-to-form-management-done-right-971889b40f9f

Tried and tested on the following semantic components:
  1. Input
  2. Dropdown
  3. TextArea
  4. Checkbox
