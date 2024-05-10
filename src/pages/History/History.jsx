import FileCopyIcon from '@mui/icons-material/FileCopy';
import IconButton from '@mui/material/IconButton';
import React, { useRef } from 'react';
import styles from './History.module.css';
const History = () => {
  const textareaRef = useRef(null);

  const handleCopy = () => {
    if (textareaRef.current) {
      textareaRef.current.select();
      document.execCommand('copy');
    }
  };
  return (
    <div className="container mt-3 ">
      <div className={styles.heading}>AI Text Merger</div>
      <div className={styles.description}></div>
      <div
        className="accordion accordion-flush w-75"
        id="accordionFlushExample"
      >
        {/* start accordian----------------------------  */}
        <div className="accordion-item border border-secondary rounded p-1">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <div className="d-flex flex-column">
                <div className={styles.date}>14-3-2023</div>
                <div className={styles.title}>Title</div>
              </div>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body ">
              <div className={styles.fieldHeading}>Input-1</div>
              <textarea
                
                className="ms-5 mt-2 p-3 p-3"
                style={{ width: '90%', height: 120 }}
                readOnly
              >
                asdsadsasssssssssssssssssssssssssss Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Itaque culpa corporis tenetur
                minima repellendus cupiditate ducimus maxime debitis commodi
                aspernatur numquam reiciendis ea quidem, laborum atque sit sed
                laboriosam iusto? Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Mollitia accusamus rem enim laborum
                exercitationem, quia placeat corrupti itaque, iure asperiores
                harum! Pariatur commodi architecto dolore ullam, odit quos
                debitis recusandae asperiores nemo. Eligendi, ducimus iusto,
                maxime consequuntur sed placeat aut voluptatum consectetur
                corporis iste voluptates repudiandae porro, aliquid laboriosam
                consequatur explicabo dolor voluptatibus obcaecati. Sit,
                aliquam. Possimus magni vero repudiandae, porro dolor debitis
                unde quidem minima officia, pariatur corporis vel earum
                perferendis placeat deleniti praesentium doloremque assumenda
                totam eaque odit ex ducimus! Eum accusamus, at dignissimos neque
                quo alias quas possimus, sequi maiores totam laudantium mollitia
                excepturi ullam a modi error fuga numquam nostrum necessitatibus
                eaque magnam velit. Non consequatur deleniti doloremque quisquam
                aut placeat voluptatibus sit autem excepturi consequuntur
                doloribus, ullam, aliquam expedita minus obcaecati? Sequi hic
                maiores quas, quaerat omnis saepe est quisquam officia rerum
                laboriosam. Soluta aperiam neque, quod exercitationem natus
                voluptatibus totam tempore accusantium veritatis provident rem
                numquam enim itaque! Ipsum possimus minus ut impedit nostrum
                nobis quidem mollitia amet aspernatur, repellat dolores hic
                eveniet quas iure dolorum, debitis blanditiis? Harum natus
                molestiae aspernatur aliquam voluptate odio eius et accusamus ut
                temporibus sit vitae cupiditate, excepturi molestias vel iste,
                vero debitis aut nisi? Corrupti, maxime velit!
              </textarea>

              <div className={styles.fieldHeading}>Input-2</div>
              <textarea
                className="ms-5 mt-2 p-3"
                readOnly
                style={{ width: '90%', height: 120 }}
              >
                asdsadsasssssssssssssssssssssssssss Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Itaque culpa corporis tenetur
                minima repellendus cupiditate ducimus maxime debitis commodi
                aspernatur numquam reiciendis ea quidem, laborum atque sit sed
                laboriosam iusto? Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Mollitia accusamus rem enim laborum
                exercitationem, quia placeat corrupti itaque, iure asperiores
                harum! Pariatur commodi architecto dolore ullam, odit quos
                debitis recusandae asperiores nemo. Eligendi, ducimus iusto,
                maxime consequuntur sed placeat aut voluptatum consectetur
                corporis iste voluptates repudiandae porro, aliquid laboriosam
                consequatur explicabo dolor voluptatibus obcaecati. Sit,
                aliquam. Possimus magni vero repudiandae, porro dolor debitis
                unde quidem minima officia, pariatur corporis vel earum
                perferendis placeat deleniti praesentium doloremque assumenda
                totam eaque odit ex ducimus! Eum accusamus, at dignissimos neque
                quo alias quas possimus, sequi maiores totam laudantium mollitia
                excepturi ullam a modi error fuga numquam nostrum necessitatibus
                eaque magnam velit. Non consequatur deleniti doloremque quisquam
                aut placeat voluptatibus sit autem excepturi consequuntur
                doloribus, ullam, aliquam expedita minus obcaecati? Sequi hic
                maiores quas, quaerat omnis saepe est quisquam officia rerum
                laboriosam. Soluta aperiam neque, quod exercitationem natus
                voluptatibus totam tempore accusantium veritatis provident rem
                numquam enim itaque! Ipsum possimus minus ut impedit nostrum
                nobis quidem mollitia amet aspernatur, repellat dolores hic
                eveniet quas iure dolorum, debitis blanditiis? Harum natus
                molestiae aspernatur aliquam voluptate odio eius et accusamus ut
                temporibus sit vitae cupiditate, excepturi molestias vel iste,
                vero debitis aut nisi? Corrupti, maxime velit!
              </textarea>
              <div className={styles.fieldHeading}>Input-3</div>

              <textarea
                className="ms-5 mt-2 p-3"
                readOnly
                style={{ width: '90%', height: 120 }}
              >
                asdsadsasssssssssssssssssssssssssss Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Itaque culpa corporis tenetur
                minima repellendus cupiditate ducimus maxime debitis commodi
                aspernatur numquam reiciendis ea quidem, laborum atque sit sed
                laboriosam iusto? Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Mollitia accusamus rem enim laborum
                exercitationem, quia placeat corrupti itaque, iure asperiores
                harum! Pariatur commodi architecto dolore ullam, odit quos
                debitis recusandae asperiores nemo. Eligendi, ducimus iusto,
                maxime consequuntur sed placeat aut voluptatum consectetur
                corporis iste voluptates repudiandae porro, aliquid laboriosam
                consequatur explicabo dolor voluptatibus obcaecati. Sit,
                aliquam. Possimus magni vero repudiandae, porro dolor debitis
                unde quidem minima officia, pariatur corporis vel earum
                perferendis placeat deleniti praesentium doloremque assumenda
                totam eaque odit ex ducimus! Eum accusamus, at dignissimos neque
                quo alias quas possimus, sequi maiores totam laudantium mollitia
                excepturi ullam a modi error fuga numquam nostrum necessitatibus
                eaque magnam velit. Non consequatur deleniti doloremque quisquam
                aut placeat voluptatibus sit autem excepturi consequuntur
                doloribus, ullam, aliquam expedita minus obcaecati? Sequi hic
                maiores quas, quaerat omnis saepe est quisquam officia rerum
                laboriosam. Soluta aperiam neque, quod exercitationem natus
                voluptatibus totam tempore accusantium veritatis provident rem
                numquam enim itaque! Ipsum possimus minus ut impedit nostrum
                nobis quidem mollitia amet aspernatur, repellat dolores hic
                eveniet quas iure dolorum, debitis blanditiis? Harum natus
                molestiae aspernatur aliquam voluptate odio eius et accusamus ut
                temporibus sit vitae cupiditate, excepturi molestias vel iste,
                vero debitis aut nisi? Corrupti, maxime velit!
              </textarea>
              <div className="d-flex">
                <div className={styles.fieldHeading}>Output</div>
                <IconButton onClick={handleCopy} aria-label="copy">
                  <FileCopyIcon />
                </IconButton>
              </div>

              <textarea
                className="ms-5 mt-2 p-3"
                readOnly
                style={{ width: '90%', height: 120 }}
                ref={textareaRef}
              >
                asdsadsasssssssssssssssssssssssssss Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Itaque culpa corporis tenetur
                minima repellendus cupiditate ducimus maxime debitis commodi
                aspernatur numquam reiciendis ea quidem, laborum atque sit sed
                laboriosam iusto? Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Mollitia accusamus rem enim laborum
                exercitationem, quia placeat corrupti itaque, iure asperiores
                harum! Pariatur commodi architecto dolore ullam, odit quos
                debitis recusandae asperiores nemo. Eligendi, ducimus iusto,
                maxime consequuntur sed placeat aut voluptatum consectetur
                corporis iste voluptates repudiandae porro, aliquid laboriosam
                consequatur explicabo dolor voluptatibus obcaecati. Sit,
                aliquam. Possimus magni vero repudiandae, porro dolor debitis
                unde quidem minima officia, pariatur corporis vel earum
                perferendis placeat deleniti praesentium doloremque assumenda
                totam eaque odit ex ducimus! Eum accusamus, at dignissimos neque
                quo alias quas possimus, sequi maiores totam laudantium mollitia
                excepturi ullam a modi error fuga numquam nostrum necessitatibus
                eaque magnam velit. Non consequatur deleniti doloremque quisquam
                aut placeat voluptatibus sit autem excepturi consequuntur
                doloribus, ullam, aliquam expedita minus obcaecati? Sequi hic
                maiores quas, quaerat omnis saepe est quisquam officia rerum
                laboriosam. Soluta aperiam neque, quod exercitationem natus
                voluptatibus totam tempore accusantium veritatis provident rem
                numquam enim itaque! Ipsum possimus minus ut impedit nostrum
                nobis quidem mollitia amet aspernatur, repellat dolores hic
                eveniet quas iure dolorum, debitis blanditiis? Harum natus
                molestiae aspernatur aliquam voluptate odio eius et accusamus ut
                temporibus sit vitae cupiditate, excepturi molestias vel iste,
                vero debitis aut nisi? Corrupti, maxime velit!
              </textarea>
            </div>
          </div>
        </div>
        {/* end accordian----------------------------  */}

        {/* start accordian----------------------------  */}
        <div className="accordion-item  border border-secondary rounded p-1 mt-2">
          <h2 className="accordion-header" id="flush-heading2">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapse2"
              aria-expanded="false"
              aria-controls="flush-collapse2"
            >
              <div className="d-flex flex-column">
                <div className={styles.date}>14-3-2023</div>
                <div className={styles.title}>Title</div>
              </div>
            </button>
          </h2>
          <div
            id="flush-collapse2"
            className="accordion-collapse collapse"
            aria-labelledby="flush-heading2"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body ">
              <div>Input-1</div>
              <textarea
                className="ms-5
                              <div>Input-2</div> mt-2 p-3"
                readOnly
                style={{ width: '90%', height: 120 }}
              >
                asdsadsasssssssssssssssssssssssssss Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Itaque culpa corporis tenetur
                minima repellendus cupiditate ducimus maxime debitis commodi
                aspernatur numquam reiciendis ea quidem, laborum atque sit sed
                laboriosam iusto? Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Mollitia accusamus rem enim laborum
                exercitationem, quia placeat corrupti itaque, iure asperiores
                harum! Pariatur commodi architecto dolore ullam, odit quos
                debitis recusandae asperiores nemo. Eligendi, ducimus iusto,
                maxime consequuntur sed placeat aut voluptatum consectetur
                corporis iste voluptates repudiandae porro, aliquid laboriosam
                consequatur explicabo dolor voluptatibus obcaecati. Sit,
                aliquam. Possimus magni vero repudiandae, porro dolor debitis
                unde quidem minima officia, pariatur corporis vel earum
                perferendis placeat deleniti praesentium doloremque assumenda
                totam eaque odit ex ducimus! Eum accusamus, at dignissimos neque
                quo alias quas possimus, sequi maiores totam laudantium mollitia
                excepturi ullam a modi error fuga numquam nostrum necessitatibus
                eaque magnam velit. Non consequatur deleniti doloremque quisquam
                aut placeat voluptatibus sit autem excepturi consequuntur
                doloribus, ullam, aliquam expedita minus obcaecati? Sequi hic
                maiores quas, quaerat omnis saepe est quisquam officia rerum
                laboriosam. Soluta aperiam neque, quod exercitationem natus
                voluptatibus totam tempore accusantium veritatis provident rem
                numquam enim itaque! Ipsum possimus minus ut impedit nostrum
                nobis quidem mollitia amet aspernatur, repellat dolores hic
                eveniet quas iure dolorum, debitis blanditiis? Harum natus
                molestiae aspernatur aliquam voluptate odio eius et accusamus ut
                temporibus sit vitae cupiditate, excepturi molestias vel iste,
                vero debitis aut nisi? Corrupti, maxime velit!
              </textarea>
              <textarea
                className="ms-5 mt-2 p-3"
                readOnly
                style={{ width: '90%', height: 120 }}
              >
                asdsadsasssssssssssssssssssssssssss Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Itaque culpa corporis tenetur
                minima repellendus cupiditate ducimus maxime debitis commodi
                aspernatur numquam reiciendis ea quidem, laborum atque sit sed
                laboriosam iusto? Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Mollitia accusamus rem enim laborum
                exercitationem, quia placeat corrupti itaque, iure asperiores
                harum! Pariatur commodi architecto dolore ullam, odit quos
                debitis recusandae asperiores nemo. Eligendi, ducimus iusto,
                maxime consequuntur sed placeat aut voluptatum consectetur
                corporis iste voluptates repudiandae porro, aliquid laboriosam
                consequatur explicabo dolor voluptatibus obcaecati. Sit,
                aliquam. Possimus magni vero repudiandae, porro dolor debitis
                unde quidem minima officia, pariatur corporis vel earum
                perferendis placeat deleniti praesentium doloremque assumenda
                totam eaque odit ex ducimus! Eum accusamus, at dignissimos neque
                quo alias quas possimus, sequi maiores totam laudantium mollitia
                excepturi ullam a modi error fuga numquam nostrum necessitatibus
                eaque magnam velit. Non consequatur deleniti doloremque quisquam
                aut placeat voluptatibus sit autem excepturi consequuntur
                doloribus, ullam, aliquam expedita minus obcaecati? Sequi hic
                maiores quas, quaerat omnis saepe est quisquam officia rerum
                laboriosam. Soluta aperiam neque, quod exercitationem natus
                voluptatibus totam tempore accusantium veritatis provident rem
                numquam enim itaque! Ipsum possimus minus ut impedit nostrum
                nobis quidem mollitia amet aspernatur, repellat dolores hic
                eveniet quas iure dolorum, debitis blanditiis? Harum natus
                molestiae aspernatur aliquam voluptate odio eius et accusamus ut
                temporibus sit vitae cupiditate, excepturi molestias vel iste,
                vero debitis aut nisi? Corrupti, maxime velit!
              </textarea>
              <textarea
                className="ms-5 mt-2 p-3"
                readOnly
                style={{ width: '90%', height: 120 }}
                ref={textareaRef}

              >
                asdsadsasssssssssssssssssssssssssss Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Itaque culpa corporis tenetur
                minima repellendus cupiditate ducimus maxime debitis commodi
                aspernatur numquam reiciendis ea quidem, laborum atque sit sed
                laboriosam iusto? Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Mollitia accusamus rem enim laborum
                exercitationem, quia placeat corrupti itaque, iure asperiores
                harum! Pariatur commodi architecto dolore ullam, odit quos
                debitis recusandae asperiores nemo. Eligendi, ducimus iusto,
                maxime consequuntur sed placeat aut voluptatum consectetur
                corporis iste voluptates repudiandae porro, aliquid laboriosam
                consequatur explicabo dolor voluptatibus obcaecati. Sit,
                aliquam. Possimus magni vero repudiandae, porro dolor debitis
                unde quidem minima officia, pariatur corporis vel earum
                perferendis placeat deleniti praesentium doloremque assumenda
                totam eaque odit ex ducimus! Eum accusamus, at dignissimos neque
                quo alias quas possimus, sequi maiores totam laudantium mollitia
                excepturi ullam a modi error fuga numquam nostrum necessitatibus
                eaque magnam velit. Non consequatur deleniti doloremque quisquam
                aut placeat voluptatibus sit autem excepturi consequuntur
                doloribus, ullam, aliquam expedita minus obcaecati? Sequi hic
                maiores quas, quaerat omnis saepe est quisquam officia rerum
                laboriosam. Soluta aperiam neque, quod exercitationem natus
                voluptatibus totam tempore accusantium veritatis provident rem
                numquam enim itaque! Ipsum possimus minus ut impedit nostrum
                nobis quidem mollitia amet aspernatur, repellat dolores hic
                eveniet quas iure dolorum, debitis blanditiis? Harum natus
                molestiae aspernatur aliquam voluptate odio eius et accusamus ut
                temporibus sit vitae cupiditate, excepturi molestias vel iste,
                vero debitis aut nisi? Corrupti, maxime velit!
              </textarea>
            </div>
          </div>
        </div>
        {/* end accordian----------------------------  */}
        {/* start accordian----------------------------  */}
        <div className="accordion-item  border border-secondary rounded p-1 mt-2">
          <h2 className="accordion-header" id="flush-heading3">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapse3"
              aria-expanded="false"
              aria-controls="flush-collapse3"
            >
              <div className="d-flex flex-column">
                <div className={styles.date}>14-3-2023</div>
                <div className={styles.title}>Title</div>
              </div>
            </button>
          </h2>
          <div
            id="flush-collapse3"
            className="accordion-collapse collapse"
            aria-labelledby="flush-heading3"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body ">
              <div>Input-1</div>
              <textarea
                className="ms-5
                              <div>Input-2</div> mt-2 p-3"
                readOnly
                style={{ width: '90%', height: 120 }}
              >
                asdsadsasssssssssssssssssssssssssss Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Itaque culpa corporis tenetur
                minima repellendus cupiditate ducimus maxime debitis commodi
                aspernatur numquam reiciendis ea quidem, laborum atque sit sed
                laboriosam iusto? Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Mollitia accusamus rem enim laborum
                exercitationem, quia placeat corrupti itaque, iure asperiores
                harum! Pariatur commodi architecto dolore ullam, odit quos
                debitis recusandae asperiores nemo. Eligendi, ducimus iusto,
                maxime consequuntur sed placeat aut voluptatum consectetur
                corporis iste voluptates repudiandae porro, aliquid laboriosam
                consequatur explicabo dolor voluptatibus obcaecati. Sit,
                aliquam. Possimus magni vero repudiandae, porro dolor debitis
                unde quidem minima officia, pariatur corporis vel earum
                perferendis placeat deleniti praesentium doloremque assumenda
                totam eaque odit ex ducimus! Eum accusamus, at dignissimos neque
                quo alias quas possimus, sequi maiores totam laudantium mollitia
                excepturi ullam a modi error fuga numquam nostrum necessitatibus
                eaque magnam velit. Non consequatur deleniti doloremque quisquam
                aut placeat voluptatibus sit autem excepturi consequuntur
                doloribus, ullam, aliquam expedita minus obcaecati? Sequi hic
                maiores quas, quaerat omnis saepe est quisquam officia rerum
                laboriosam. Soluta aperiam neque, quod exercitationem natus
                voluptatibus totam tempore accusantium veritatis provident rem
                numquam enim itaque! Ipsum possimus minus ut impedit nostrum
                nobis quidem mollitia amet aspernatur, repellat dolores hic
                eveniet quas iure dolorum, debitis blanditiis? Harum natus
                molestiae aspernatur aliquam voluptate odio eius et accusamus ut
                temporibus sit vitae cupiditate, excepturi molestias vel iste,
                vero debitis aut nisi? Corrupti, maxime velit!
              </textarea>
              <textarea
                className="ms-5 mt-2 p-3"
                readOnly
                style={{ width: '90%', height: 120 }}
              >
                asdsadsasssssssssssssssssssssssssss Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Itaque culpa corporis tenetur
                minima repellendus cupiditate ducimus maxime debitis commodi
                aspernatur numquam reiciendis ea quidem, laborum atque sit sed
                laboriosam iusto? Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Mollitia accusamus rem enim laborum
                exercitationem, quia placeat corrupti itaque, iure asperiores
                harum! Pariatur commodi architecto dolore ullam, odit quos
                debitis recusandae asperiores nemo. Eligendi, ducimus iusto,
                maxime consequuntur sed placeat aut voluptatum consectetur
                corporis iste voluptates repudiandae porro, aliquid laboriosam
                consequatur explicabo dolor voluptatibus obcaecati. Sit,
                aliquam. Possimus magni vero repudiandae, porro dolor debitis
                unde quidem minima officia, pariatur corporis vel earum
                perferendis placeat deleniti praesentium doloremque assumenda
                totam eaque odit ex ducimus! Eum accusamus, at dignissimos neque
                quo alias quas possimus, sequi maiores totam laudantium mollitia
                excepturi ullam a modi error fuga numquam nostrum necessitatibus
                eaque magnam velit. Non consequatur deleniti doloremque quisquam
                aut placeat voluptatibus sit autem excepturi consequuntur
                doloribus, ullam, aliquam expedita minus obcaecati? Sequi hic
                maiores quas, quaerat omnis saepe est quisquam officia rerum
                laboriosam. Soluta aperiam neque, quod exercitationem natus
                voluptatibus totam tempore accusantium veritatis provident rem
                numquam enim itaque! Ipsum possimus minus ut impedit nostrum
                nobis quidem mollitia amet aspernatur, repellat dolores hic
                eveniet quas iure dolorum, debitis blanditiis? Harum natus
                molestiae aspernatur aliquam voluptate odio eius et accusamus ut
                temporibus sit vitae cupiditate, excepturi molestias vel iste,
                vero debitis aut nisi? Corrupti, maxime velit!
              </textarea>
              <textarea
                className="ms-5 mt-2 p-3"
                readOnly
                style={{ width: '90%', height: 120 }}
              >
                asdsadsasssssssssssssssssssssssssss Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Itaque culpa corporis tenetur
                minima repellendus cupiditate ducimus maxime debitis commodi
                aspernatur numquam reiciendis ea quidem, laborum atque sit sed
                laboriosam iusto? Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Mollitia accusamus rem enim laborum
                exercitationem, quia placeat corrupti itaque, iure asperiores
                harum! Pariatur commodi architecto dolore ullam, odit quos
                debitis recusandae asperiores nemo. Eligendi, ducimus iusto,
                maxime consequuntur sed placeat aut voluptatum consectetur
                corporis iste voluptates repudiandae porro, aliquid laboriosam
                consequatur explicabo dolor voluptatibus obcaecati. Sit,
                aliquam. Possimus magni vero repudiandae, porro dolor debitis
                unde quidem minima officia, pariatur corporis vel earum
                perferendis placeat deleniti praesentium doloremque assumenda
                totam eaque odit ex ducimus! Eum accusamus, at dignissimos neque
                quo alias quas possimus, sequi maiores totam laudantium mollitia
                excepturi ullam a modi error fuga numquam nostrum necessitatibus
                eaque magnam velit. Non consequatur deleniti doloremque quisquam
                aut placeat voluptatibus sit autem excepturi consequuntur
                doloribus, ullam, aliquam expedita minus obcaecati? Sequi hic
                maiores quas, quaerat omnis saepe est quisquam officia rerum
                laboriosam. Soluta aperiam neque, quod exercitationem natus
                voluptatibus totam tempore accusantium veritatis provident rem
                numquam enim itaque! Ipsum possimus minus ut impedit nostrum
                nobis quidem mollitia amet aspernatur, repellat dolores hic
                eveniet quas iure dolorum, debitis blanditiis? Harum natus
                molestiae aspernatur aliquam voluptate odio eius et accusamus ut
                temporibus sit vitae cupiditate, excepturi molestias vel iste,
                vero debitis aut nisi? Corrupti, maxime velit!
              </textarea>
            </div>
          </div>
        </div>
        {/* end accordian----------------------------  */}
        {/* start accordian----------------------------  */}
        <div className="accordion-item  border border-secondary rounded p-1 mt-2">
          <h2 className="accordion-header" id="flush-heading4">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapse4"
              aria-expanded="false"
              aria-controls="flush-collapse4"
            >
              <div className="d-flex flex-column">
                <div className={styles.date}>14-3-2023</div>
                <div className={styles.title}>Title</div>
              </div>
            </button>
          </h2>
          <div
            id="flush-collapse4"
            className="accordion-collapse collapse"
            aria-labelledby="flush-heading4"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body ">
              <div>Input-1</div>
              <textarea
                className="ms-5
                              <div>Input-2</div> mt-2 p-3"
                readOnly
                style={{ width: '90%', height: 120 }}
              >
                asdsadsasssssssssssssssssssssssssss Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Itaque culpa corporis tenetur
                minima repellendus cupiditate ducimus maxime debitis commodi
                aspernatur numquam reiciendis ea quidem, laborum atque sit sed
                laboriosam iusto? Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Mollitia accusamus rem enim laborum
                exercitationem, quia placeat corrupti itaque, iure asperiores
                harum! Pariatur commodi architecto dolore ullam, odit quos
                debitis recusandae asperiores nemo. Eligendi, ducimus iusto,
                maxime consequuntur sed placeat aut voluptatum consectetur
                corporis iste voluptates repudiandae porro, aliquid laboriosam
                consequatur explicabo dolor voluptatibus obcaecati. Sit,
                aliquam. Possimus magni vero repudiandae, porro dolor debitis
                unde quidem minima officia, pariatur corporis vel earum
                perferendis placeat deleniti praesentium doloremque assumenda
                totam eaque odit ex ducimus! Eum accusamus, at dignissimos neque
                quo alias quas possimus, sequi maiores totam laudantium mollitia
                excepturi ullam a modi error fuga numquam nostrum necessitatibus
                eaque magnam velit. Non consequatur deleniti doloremque quisquam
                aut placeat voluptatibus sit autem excepturi consequuntur
                doloribus, ullam, aliquam expedita minus obcaecati? Sequi hic
                maiores quas, quaerat omnis saepe est quisquam officia rerum
                laboriosam. Soluta aperiam neque, quod exercitationem natus
                voluptatibus totam tempore accusantium veritatis provident rem
                numquam enim itaque! Ipsum possimus minus ut impedit nostrum
                nobis quidem mollitia amet aspernatur, repellat dolores hic
                eveniet quas iure dolorum, debitis blanditiis? Harum natus
                molestiae aspernatur aliquam voluptate odio eius et accusamus ut
                temporibus sit vitae cupiditate, excepturi molestias vel iste,
                vero debitis aut nisi? Corrupti, maxime velit!
              </textarea>
              <textarea
                className="ms-5 mt-2 p-3"
                readOnly
                style={{ width: '90%', height: 120 }}
              >
                asdsadsasssssssssssssssssssssssssss Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Itaque culpa corporis tenetur
                minima repellendus cupiditate ducimus maxime debitis commodi
                aspernatur numquam reiciendis ea quidem, laborum atque sit sed
                laboriosam iusto? Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Mollitia accusamus rem enim laborum
                exercitationem, quia placeat corrupti itaque, iure asperiores
                harum! Pariatur commodi architecto dolore ullam, odit quos
                debitis recusandae asperiores nemo. Eligendi, ducimus iusto,
                maxime consequuntur sed placeat aut voluptatum consectetur
                corporis iste voluptates repudiandae porro, aliquid laboriosam
                consequatur explicabo dolor voluptatibus obcaecati. Sit,
                aliquam. Possimus magni vero repudiandae, porro dolor debitis
                unde quidem minima officia, pariatur corporis vel earum
                perferendis placeat deleniti praesentium doloremque assumenda
                totam eaque odit ex ducimus! Eum accusamus, at dignissimos neque
                quo alias quas possimus, sequi maiores totam laudantium mollitia
                excepturi ullam a modi error fuga numquam nostrum necessitatibus
                eaque magnam velit. Non consequatur deleniti doloremque quisquam
                aut placeat voluptatibus sit autem excepturi consequuntur
                doloribus, ullam, aliquam expedita minus obcaecati? Sequi hic
                maiores quas, quaerat omnis saepe est quisquam officia rerum
                laboriosam. Soluta aperiam neque, quod exercitationem natus
                voluptatibus totam tempore accusantium veritatis provident rem
                numquam enim itaque! Ipsum possimus minus ut impedit nostrum
                nobis quidem mollitia amet aspernatur, repellat dolores hic
                eveniet quas iure dolorum, debitis blanditiis? Harum natus
                molestiae aspernatur aliquam voluptate odio eius et accusamus ut
                temporibus sit vitae cupiditate, excepturi molestias vel iste,
                vero debitis aut nisi? Corrupti, maxime velit!
              </textarea>
              <textarea
                className="ms-5 mt-2 p-3"
                readOnly
                style={{ width: '90%', height: 120 }}
              >
                asdsadsasssssssssssssssssssssssssss Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Itaque culpa corporis tenetur
                minima repellendus cupiditate ducimus maxime debitis commodi
                aspernatur numquam reiciendis ea quidem, laborum atque sit sed
                laboriosam iusto? Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Mollitia accusamus rem enim laborum
                exercitationem, quia placeat corrupti itaque, iure asperiores
                harum! Pariatur commodi architecto dolore ullam, odit quos
                debitis recusandae asperiores nemo. Eligendi, ducimus iusto,
                maxime consequuntur sed placeat aut voluptatum consectetur
                corporis iste voluptates repudiandae porro, aliquid laboriosam
                consequatur explicabo dolor voluptatibus obcaecati. Sit,
                aliquam. Possimus magni vero repudiandae, porro dolor debitis
                unde quidem minima officia, pariatur corporis vel earum
                perferendis placeat deleniti praesentium doloremque assumenda
                totam eaque odit ex ducimus! Eum accusamus, at dignissimos neque
                quo alias quas possimus, sequi maiores totam laudantium mollitia
                excepturi ullam a modi error fuga numquam nostrum necessitatibus
                eaque magnam velit. Non consequatur deleniti doloremque quisquam
                aut placeat voluptatibus sit autem excepturi consequuntur
                doloribus, ullam, aliquam expedita minus obcaecati? Sequi hic
                maiores quas, quaerat omnis saepe est quisquam officia rerum
                laboriosam. Soluta aperiam neque, quod exercitationem natus
                voluptatibus totam tempore accusantium veritatis provident rem
                numquam enim itaque! Ipsum possimus minus ut impedit nostrum
                nobis quidem mollitia amet aspernatur, repellat dolores hic
                eveniet quas iure dolorum, debitis blanditiis? Harum natus
                molestiae aspernatur aliquam voluptate odio eius et accusamus ut
                temporibus sit vitae cupiditate, excepturi molestias vel iste,
                vero debitis aut nisi? Corrupti, maxime velit!
              </textarea>
            </div>
          </div>
        </div>
        {/* end accordian----------------------------  */}
      </div>
    </div>
  );
};

export default History;
