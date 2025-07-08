# Contributing to Say Hello Code

Thank you for your interest in contributing to Say Hello Code! This project aims to provide educational resources for learning programming languages through "Hello, World!" examples.

## 📄 License Agreement

By contributing to this project, you agree that your contributions will be licensed under the same [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/) as the rest of the project.

## How to Contribute

### Adding New Languages

1. **Fork the repository**
2. **Add your language to `js/languages.js`** following this structure:
   ```javascript
   {
       "name": "LanguageName",
       "year": 2023,
       "creator": "Creator Name",
       "code": "print(\"Hello, World!\")",
       "desc": "Brief description of the language",
       "popularity": 50, // 1-100 scale
       "categories": ["Web", "Systems"], // See categories below
       "primaryCategory": "Web",
       "paradigms": ["Object-Oriented", "Functional"],
       "domains": ["Web Development"],
       "difficulty": "Beginner", // Beginner, Intermediate, Advanced
       "typing": "Dynamic", // Static, Dynamic, Mixed
       "sourceFile": "category-languages.js"
   }
   ```

3. **Categories Available:**
   - Popular, Web, Systems, Functional, Data Science
   - Mobile, Game Development, Academic, Legacy
   - Emerging, Esoteric, Specialized, Configuration
   - Markup, Shell, Scripting, Scientific, Vintage
   - Object-Oriented, Additional

### Code Guidelines

- Ensure "Hello, World!" code is syntactically correct
- Use proper escaping for special characters
- Include accurate metadata (year, creator, description)
- Test your additions locally before submitting
- Verify information accuracy from reliable sources

### Submitting Changes

1. Create a descriptive commit message
2. Submit a pull request with:
   - Clear description of changes
   - Reason for the addition/modification
   - Any relevant links or references
   - Confirmation that you agree to CC BY 4.0 licensing

## Attribution Guidelines

When contributing:
- You will be credited in commit history
- Significant contributions may be acknowledged in documentation
- All contributions become part of the CC BY 4.0 licensed work
- You retain the right to be attributed for your specific contributions

## Code of Conduct

- Be respectful and inclusive
- Focus on educational value
- Ensure accuracy of information
- Help maintain code quality
- Respect intellectual property rights

## Types of Contributions Welcome

- **New programming languages** - Add missing languages
- **Accuracy improvements** - Fix incorrect information
- **Documentation** - Improve guides and explanations
- **Accessibility** - Enhance usability features
- **Performance** - Optimize loading and functionality
- **Translations** - Help make content accessible globally

## Questions?

Open an issue for questions or suggestions! We're here to help make programming education more accessible.

**Contact:** [info@dynamicdevices.co.uk](mailto:info@dynamicdevices.co.uk)
**Repository:** https://github.com/DynamicDevices/say-hello-code

---

*By contributing, you're helping make programming education freely available to everyone under Creative Commons licensing.*